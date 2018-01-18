import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { SchemingService } from "./scheming.service";
import { RecruitingService } from "./recruiting.service";
import { TrainingService } from "./training.service";
import { OperatingService } from "./operating.service";
import { NumbersService } from "./core/numbers.service";

//All loop related activities. Called by app.component and nowhere else.
@Injectable()
export class PrimaryLoopService {

    constructor(public _player: PlayerService,
        public _operating: OperatingService,
        public _scheming: SchemingService,
        public _recruiting: RecruitingService,
        public _numbers: NumbersService,
        public _training: TrainingService) { }

    //Flow logic is 1. Scheme 2. Recruit

    //Ticker set at one minute (@100 ms/s) for now.
    ticker: number = 600

    //Duplicate of above for replacement events.
    defaultTicker: number = 600;

    //Events that occur every tick
    tick() {
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisTick);
        }
        for (var i = 0; i < this._player.recruiting.length; i++) {
            if (this._recruiting.isRecruitingById(i)) {
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
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisSecond)
        }
    }

    //Events that occur every minute
    minute() {
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisMinute)
        }
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