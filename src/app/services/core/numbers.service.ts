import { Injectable } from "@angular/core";
import { PlayerService } from "../player.service";

@Injectable()
export class NumbersService {

    constructor ( public _player: PlayerService) {

    }

    coinFlipChance = 0.5; //Here to be modified later.

    coinFlip(times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= this.coinFlipChance) { successes++ }
        }
        return successes;
    }

    standardExpArray: Array<Number> = [
        60, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000
    ]

    standardLairReq: Array<Number> = [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3
    ]

    schemeLairReq: Array<Array<Number>> = [
        this.standardLairReq, //0: Mastermind
        this.standardLairReq, //1: Cold Logic
        this.standardLairReq //2: Quick Thinking
    ]

    schemeExp: Array<Array<Number>> = [
        this.standardExpArray, //0: Mastermind
        this.standardExpArray, //1: Cold Logic
        this.standardExpArray //2: Quick Thinking
    ]   

    //Scheme Modifiers
    
    //01: Mastermind
    //1 scheme point per level per second.
    mastermindNumbers() {
        return this._player.schemes[0]['level'];
    }

    //02: Cold Logic
    coldLogicNumbers() {
        return this._player.schemes[1]['level']*60;
    }

    //03: Quick Thinking
    quickThinkingNumbers() {
        var successes = this.coinFlip(6);
        return successes >= 5 ? this._player.schemes[2]['level'] : 0;
    }

}