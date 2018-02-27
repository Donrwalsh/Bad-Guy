import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { DataService } from '../services/data.service';
import {SchemingService } from '../services/scheming.service';
import { Base } from '../base';
import { BaseNum } from '../base-num';
import { Scheme } from '../models/scheme';
import { Recruit } from '../models/recruit';
import { Train } from '../models/train';
import { Operation } from '../models/operation';

@Injectable()
export class SystemService extends BaseNum {

    constructor(public cookieService: CookieService,
        public _scheming: SchemingService,
        public _data: DataService) {super(); }

    public marker: number;

    get freshGame() {
        return '' +
        //The construction of a Save String:
        //Character 0: boolean register for earning scheme points
        '0'
        //Notoriety.
        + '0z'
        //Scheme numbers. level, exp, cash in order by scheme ref. (13 schemes so far)
        + '0z0z0z' + '0z0z0z' + '0z0z0z' 
        + '0z0z0z' + '0z0z0z' + '0z0z0z' 
        + '0z0z0z' + '0z0z0z' + '0z0z0z'
        + '0z0z0z' + '0z0z0z' + '0z0z0z'
        + '0z0z0z' + '0z0z0z' + '0z0z0z'
        //Current Scheme. Only the id is stored. An empty entry means none is selected.
        + 'z'
        //Banked Scheme Points. Relevant for the Rocket Science scheme:
        + '0z'
        //Current henchmen.
        + '0z'
        //RECRUITS numbers. currentStore, countdown, lock in order by help-wanted ref.
        + '0z0z0z' + '0z0z0z' + '0z0z0z' + '0z0z0z' + '0z0z0z'
        //Lair Hp. Raw number, newGame value is 1.
        + '1z'
        //Current guards.
        + '0z'
        //TRAINS numbers. currentStore, countdown, lock, queued in order by help-wanted ref.
        + '0z0z0z0z' + '0z0z0z0z' + '0z0z0z0z' + '0z0z0z0z' + '0z0z0z0z'
        //OPERATIONS numbers. name, rarity, cost01, available, countdown, lock in order by id. 10 ops so far.
        + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z'
        + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z' + 'zzz1z0z0z'
        //Raw Cash
        + '0z'
        //Passive Cash. 5 values for different tiers.
        + '0z0z0z0z0z'
    }

    devLog(object: Object) {
        //This wrapper will be used to only display save/load console logs in the dev environment.
        console.log(object);
    }

    saveReader(data: string) {
        var count = 0;
        var result: string = '';
        while(true) {
            this.marker++;
            count++;
            if (data[this.marker] != "z") {
                result += data[this.marker];
            } else {
                break;
            }
            if (count == 50) {
                this.devLog("Something is wrong with the save reader. Breaking");
                break;
            }
        }
        return result;
    }

    load(data: string) {
        Base.EARNING_SCHEME_POINTS = data[0] === "1";
        this.devLog("Base.EARNING_SCHEME_POINTS set to " + Base.EARNING_SCHEME_POINTS);
        this.marker = 0;
        var notoriety = this.saveReader(data);
        Base.NOTORIETY = Number(notoriety);
        this.devLog("Base.NOTORIETY set to " + Base.NOTORIETY);
        this._data.getSchemes()
            .subscribe((res) => {
                var SchemeData = new Array();
                res.forEach( (scheme) => {
                    var exp = this.saveReader(data);
                    var cash = this.saveReader(data);
                    var level = this.saveReader(data);

                    let newScheme = new Scheme(
                        scheme.ref,
                        scheme.name,
                        scheme.description,
                        scheme.flavor,
                        scheme.tree,
                        Number(exp),
                        Number(cash),
                        Number(level),
                        this.schemeLairReq[scheme.ref],
                        this.schemeExp[scheme.ref],
                        this.schemeCashCost[scheme.ref]
                    );
                    SchemeData.push(newScheme);
                });
                Base.SCHEMES = SchemeData;
                this.devLog("Base.SCHEMES populated:");
                this.devLog(Base.SCHEMES);
                
                var currentScheme = this.saveReader(data);
                if (currentScheme.length > 0) {
                    Base.CURRENT_SCHEME = Base.SCHEMES[Number(currentScheme)];
                    this._scheming.selected = Base.CURRENT_SCHEME.tree;
                    this._scheming.previewScheme = Base.CURRENT_SCHEME;
                    this._scheming.showPreview = true;
                    this.devLog("set Base.CURRENT_SCHEME and switched the preview:");
                    this.devLog(Base.CURRENT_SCHEME);
                } else {
                    this.devLog("no current scheme to set");
                }

                var bankedSchemePoints = this.saveReader(data);
                Base.BANKED_SCHEME_POINTS = Number(bankedSchemePoints);
                this.devLog("Base.BANKED_SCHEME_POINTS set to " + Base.BANKED_SCHEME_POINTS);

                Base.INITIAL_LOAD_SCHEMES = false; //Toggle the lockout for visible elements that rely on scheme data.

                Base.CURRENT_HENCHMEN = Number(this.saveReader(data));
                this.devLog("Base.CURRENT_HENCHMEN set to " + Base.CURRENT_HENCHMEN)

                var RecruitData = new Array();
                for (var i = 0; i < 5; i++) { //magic number 5 for 5 planned help-wanted objects
                    var currentStore = this.saveReader(data);
                    var countdown = this.saveReader(data);
                    var lock = this.saveReader(data);
                    let newRecruit = new Recruit(
                        i,
                        Number(currentStore),
                        Number(countdown),
                        Number(lock)
                    )
                    RecruitData.push(newRecruit);
                }

                BaseNum.RECRUITS = RecruitData;
                this.devLog("BaseNum.RECRUITS populated:");
                this.devLog(BaseNum.RECRUITS);
                Base.INITIAL_LOAD_RECRUITS = false;

                Base.CURRENT_LAIR_HP = Number(this.saveReader(data));
                this.devLog("Base.CURRENT_LAIR_HP set to " + Base.CURRENT_LAIR_HP)

                Base.CURRENT_GUARDS = Number(this.saveReader(data));
                this.devLog("Base.CURRENT_GUARDS set to " + Base.CURRENT_GUARDS)

                var TrainData = new Array();
                for (var i = 0; i < 5; i++) { //magic number 5 for 5 henchmen upgrades
                    var currentStore = this.saveReader(data);
                    var countdown = this.saveReader(data);
                    var lock = this.saveReader(data);
                    var queued = this.saveReader(data);
                    let newTrain = new Train(
                        i,
                        Number(currentStore),
                        Number(countdown),
                        Number(lock),
                        Number(queued)
                    )
                    TrainData.push(newTrain);
                }
                BaseNum.TRAINS = TrainData;
                this.devLog("BaseNum.TRAINS populated:");
                this.devLog(BaseNum.TRAINS);

                var OperationData = new Array();
                for (var i = 0; i < 10; i++) {//Magic number 10 for existing operations.
                    var name = this.saveReader(data);
                    var rarity = this.saveReader(data);
                    var cost01 = this.saveReader(data);
                    var available = this.saveReader(data);
                    var countdown = this.saveReader(data);
                    var lock = this.saveReader(data);
                    let newOperation = new Operation(
                        i,
                        name.length > 0 ? Number(name) : -1,
                        rarity.length > 0 ? Number(rarity) : -1,
                        cost01.length > 0 ? Number(cost01) : -1,
                        available == "1",
                        Number(countdown),
                        Number(lock)
                    );
                    OperationData.push(newOperation);
                }
                BaseNum.OPERATIONS = OperationData;
                this.devLog("BaseNum.OPERATIONS populated:");
                this.devLog(BaseNum.OPERATIONS);

                Base.CASH = Number(this.saveReader(data));
                this.devLog("Base.CASH set to " + Base.CASH);

                var PassiveCash = new Array();
                for (var i = 0; i < 5; i++) {//Magic number 5 for passive cash array.
                    PassiveCash[i] = Number(this.saveReader(data));
                }
                Base.PASSIVE_CASH = PassiveCash;
                this.devLog("Base.PASSIVE_CASH populated:")
                this.devLog(Base.PASSIVE_CASH);
            });
    }

    save() {
        this.devLog("saving game");
        var saveString: string = '';
        
        this.devLog("capturing Base.EARNING_SCHEME_POINTS:");
        saveString += Base.EARNING_SCHEME_POINTS ? "1" : "0";
        this.devLog(saveString);
        
        this.devLog("capturing Base.NOTORIETY:");
        saveString += Base.NOTORIETY + 'z';
        this.devLog(Base.NOTORIETY);

        this.devLog("capturing Base.SCHEMES: (exp, cash, level)");
        Base.SCHEMES.forEach( (scheme) => {
            var addToString = scheme.exp + "z" + scheme.cash + "z" + scheme.level + "z" ;
            this.devLog("id " + scheme.ref + ": " + addToString)
            saveString += addToString;
        });

        this.devLog("capturing Base.CURRENT_SCHEME:")
        if (Base.CURRENT_SCHEME == null) {
            saveString = saveString + "z";
            this.devLog("null");
        } else {
            saveString = saveString + Base.CURRENT_SCHEME.ref + "z";
            this.devLog(Base.CURRENT_SCHEME.ref + "z")
        }

        this.devLog("capturing Base.BANKED_SCHEME_POINTS:")
        saveString = saveString + Base.BANKED_SCHEME_POINTS + "z";
        this.devLog(Base.BANKED_SCHEME_POINTS);

        this.devLog("capturing Base.CURRENT_HENCHMEN:")
        saveString = saveString + Base.CURRENT_HENCHMEN + "z";
        this.devLog(Base.CURRENT_HENCHMEN + "z");

        this.devLog("capturing BaseNum.RECRUITS: (currentStore, countdown, lock)");
        BaseNum.RECRUITS.forEach( (recruit) => {
            var addToString = recruit.currentStore + "z" + recruit.countdown + "z" + recruit.lock + "z";
            this.devLog("id " + recruit.id + ":" + addToString);
            saveString += addToString;
        });

        this.devLog("capturing Base.CURRENT_LAIR_HP:");
        saveString = saveString + Base.CURRENT_LAIR_HP + "z";
        this.devLog(Base.CURRENT_LAIR_HP + 'z');

        this.devLog("capturing Base.CURRENT_GUARDS:");
        saveString = saveString + Base.CURRENT_GUARDS + "z";
        this.devLog(Base.CURRENT_GUARDS + 'z');

        this.devLog("capturing BaseNum.TRAINS:");
        BaseNum.TRAINS.forEach( (train) =>  {
            var addToString = train.currentStore + 'z' + train.countdown + "z" + train.lock + "z" + train.queued + "z";
            this.devLog("id " + train.id + ":" + addToString);
            saveString += addToString;

        });

        this.devLog("capturing BaseNum.OPERATIONS:");
        BaseNum.OPERATIONS.forEach( (operate) => {
            var addToString = '';
            addToString += operate.name == -1 ? 'z' : operate.name + 'z';
            addToString += operate.rarity == -1 ? 'z' : operate.rarity + 'z';
            addToString += operate.cost01 == -1 ? 'z' : operate.cost01 + 'z';
            addToString += operate.available ? '1z' : '0z';
            addToString += operate.countdown + 'z' + operate.lock + 'z';
            this.devLog("id " + operate.id + ":" + addToString);
            saveString += addToString;
        })

        this.devLog("capturing Base.CASH:");
        saveString += Base.CASH + 'z';
        this.devLog(Base.CASH + 'z')

        this.devLog("capturing Base.PASSIVE_CASH")
        var passiveString = '';
        Base.PASSIVE_CASH.forEach( (passive) =>{
            passiveString += passive + 'z';
        })
        saveString += passiveString;
        this.devLog(passiveString);
        
        this.devLog("save string constructed:")
        this.devLog(saveString);

        this.cookieService.set( 'save', saveString, 365 );
        this.devLog("saving game complete")
        
    }


}