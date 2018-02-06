import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { SchemingService } from "./scheming.service";
import { RecruitingService } from "./recruiting.service";
import { TrainingService } from "./training.service";
import { OperatingService } from "./operating.service";
import { NumbersService } from "./core/numbers.service";
import { Scheme } from "../models/scheme";
import { Recruit } from "../models/recruit";
import { CookieService } from "ngx-cookie-service";
import { Base } from "../base";

//All loop related activities. Called by app.component and nowhere else.
@Injectable()
export class PrimaryLoopService extends Base {

    constructor(public cookieService: CookieService,
        public _player: PlayerService,
        public _operating: OperatingService,
        public _scheming: SchemingService,
        public _recruiting: RecruitingService,
        public _numbers: NumbersService,
        public _training: TrainingService) {
            super();
         }

    //Ticker set at one minute (@100 ms/s) for now.
    ticker: number = 600

    //Duplicate of above for replacement events.
    defaultTicker: number = 600;

    //Used for one-off console logs - logging within the loop can be tedious.
    didOnce = false;
    doOnce() {
        console.log(Base.SCHEMES)
    }

    //Events that occur every tick
    tick() {

        if (!this.didOnce) {
            this.doOnce();
            this.didOnce = true;
        }

        /* In-progress 'auto-player' functionality
        if (!this._scheming.EARNING_SCHEME_POINTS) {
            var selectionArray = [];
            for (i = 0; i < 9; i++) {
                if (this._scheming.canSchemeBeLearned(i)) {
                    selectionArray.push(i);
                }
            }
            if (selectionArray.length > 0) {
                var schemeSelection = Math.floor(Math.random()*selectionArray.length);
                this._player.currentScheme = this._scheming.schemes[selectionArray[schemeSelection]];
                this._scheming.EARNING_SCHEME_POINTS = true;
            }
            
        }

                for (var i = 0; i < this._player.recruiting.length; i++) {
            this._recruiting.collectById(i);
        }

        for (var i = 0; i < this._player.operating.length; i++) {

        }
        */

        if (this.earningSchemePoints()) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisTick);
        }
        for (var i = 0; i < this._recruiting.recruits.length; i++) {
            if (this._recruiting.recruits[i].isRecruiting) {
                this._recruiting.tickById(i);
            }
        }
        for (var i = 0; i < this._player.training.length; i++) {
            if (this._training.isTrainingById(i)) {
                this._training.tickById(i);
            }
        }
        for (var i = 0; i < this._player.operating.length; i++) {
            if (this._operating.isUnlockedById(i)) {
                this._operating.tickById(i);
            }
        }
    }

    //Events that occur every second
    second() {
        if (this.earningSchemePoints()) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisSecond)
        }
    }

    //Events that occur every minute
    minute() {
        if (this.earningSchemePoints()) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisMinute)
        }
        console.log("I am saving the game");
        var saveString = Base.EARNING_SCHEME_POINTS ? "1" : "0";
        for (var i = 0; i < this._player.schemes.length; i++) {
            saveString = saveString + this._player.schemes[i]['level'] + "z" + this._player.schemes[i]['exp'] + "z";
        }
        console.log(saveString);
        this.cookieService.set( 'save', saveString, 365 );

    }

    //This event happens at every iteration of the main loop.
    action() {
        this.ticker--;
        if (this.ticker == 0) {
            this.ticker = this.defaultTicker;
        }

        this.tick();

        if (this.ticker % 10 == 0) {
            this.second();
        }
        if (this.ticker % 600 == 0) {
            this.minute();
        }
    }



}