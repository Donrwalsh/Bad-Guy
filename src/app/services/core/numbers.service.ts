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
        this.standardLairReq, //2: Quick Thinking
        this.standardLairReq //3: Hired Help
    ]

    schemeExp: Array<Array<Number>> = [
        this.standardExpArray, //0: Mastermind
        this.standardExpArray, //1: Cold Logic
        this.standardExpArray, //2: Quick Thinking
        this.standardExpArray //3: Hired Help
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

    //04: Hired Help
    hiredHelpCapacity() {
        var space = 0;
        for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
            if (_i == 1) { space += 4 }
            if (_i == 3) { space += 5 }
        }
        return space;
    }
    
    hiredHelpUnlocked(id) {
        if (id == 0) {
            return this._player.schemes[3]['level'] > 0;
        } else if (id == 1) {
            return this._player.schemes[3]['level'] >= 4;
        } else {
            return false;
        }
    }

    hiredHelpRecruitRate() {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
            if (_i == 2) { reduce += 150}
        }
        return reduce;
    }

    //05: Lodging
    lodgingNumbers() {
        var increase = 0
        for (var i = 0; i < this._player.schemes[5]['level']; i++) {
            if (i < 2) { increase += 5; } 
            else if (i > 1 && i < 4) { increase += 10; }
            else if (i == 4) { increase += 20; } 
            else if (i == 5) { increase += 50; }
        }
        return increase;
    }

    //06: Heists
    heistUnlocked(id) {
        if (id == 0) return this._player.schemes[6]['level'] > 0;
    }

    heistRarityChancesArray() {
        if (this._player.schemes[6]['level'] == 0) { 
            return [.5, .7, .85, .95, 1] 
        }
        else if (this._player.schemes[6]['level'] >= 1 && this._player.schemes[6]['level'] <= 2) {
            return [.46, .67, .83, .94, 1]
        } else if (this._player.schemes[6]['level'] >= 3 && this._player.schemes[6]['level'] <= 5) {
            return [.42, .64, .81, .93, 1]
        }
    }

    heistRechargeRate() {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[6]['level']; _i++) {
            if (_i == 2) { reduce += 180}
            if (_i == 4) { reduce += 180}
        }
        return reduce;
    }


}