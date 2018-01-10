import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";

//All loop related activities. Called by app.component and nowhere else.
@Injectable()
export class PrimaryLoopService {

    constructor(public _player: PlayerService) { }

    //Saved Variables
    //Ticker set at one minute (@100 ms/s) for now.
    ticker: number = 600

    //Duplicate of above for replacement events.
    defaultTicker: number = 600;

    //Events that occur every tick
    tick() {
        if (this._player.earningSchemePoints) {
            this._player.earnSchemePoints(this._player.schemePointsHatchedThisTick);
        }
    }

    //Events that occur every second
    second() {
        if (this._player.earningSchemePoints) {
            this._player.earnSchemePoints(this._player.schemePointsHatchedThisSecond)
        }
    }

    //Events that occur every minute
    minute() {
        if (this._player.earningSchemePoints) {
            this._player.earnSchemePoints(this._player.schemePointsHatchedThisMinute)
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