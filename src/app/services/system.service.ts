import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { DataService } from '../services/data.service';
import {SchemingService } from '../services/scheming.service';
import { Base } from '../base';
import { BaseNum } from '../base-num';
import { Scheme } from '../models/scheme'

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
        //Scheme numbers. level, exp, cash in order by scheme ref. (10 schemes so far
        + '0z0z0z' + '0z0z0z' + '0z0z0z' 
        + '0z0z0z' + '0z0z0z' + '0z0z0z' 
        + '0z0z0z' + '0z0z0z' + '0z0z0z'
        + '0z0z0z' 
        //Current Scheme. Only the id is stored. An empty entry means none is selected.
        + 'z'
    }
    
    //+ '0'
    
    

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
                console.log("Something is wrong with the save reader. Breaking");
                break;
            }
        }
        return result;
    }

    load(data: string) {
        console.log(data.length);
        Base.EARNING_SCHEME_POINTS = data[0] === "1";
        this.devLog("Base.EARNING_SCHEME_POINTS set to " + Base.EARNING_SCHEME_POINTS);
        this.marker = 0;
        this._data.getSchemes()
            .subscribe((res) => {
                var SchemeData = new Array();
                var level: string = "";
                var exp: string = "";
                var cash: string = "";
                res.forEach( (scheme) => {
                    level = this.saveReader(data);
                    exp = this.saveReader(data);
                    cash = this.saveReader(data);

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
                    level = "";
                    exp = "";
                    cash = "";
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
            });
    }

    save() {
        this.devLog("saving game");
        var saveString: string = '';
        saveString += Base.EARNING_SCHEME_POINTS ? "1" : "0";
        Base.SCHEMES.forEach( (scheme) => {
            saveString += scheme.level + "z" + scheme.exp + "z" + scheme.cash + "z";
        });
        this.devLog(saveString);


        this.cookieService.set( 'save', saveString, 365 );
    }


}