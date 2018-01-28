import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";

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
        10, 30, 60, 120, 240, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000
    ]

    specialExpArray: Array<Number> = [ 6000, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000 ]

    standardLairReq: Array<Number> = [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3
    ]

    schemeLairReq: Array<Array<Number>> = [
        this.standardLairReq, //0: Mastermind
        this.standardLairReq, //1: Cold Logic
        this.standardLairReq, //2: Quick Thinking
        this.standardLairReq, //3: Hired Help
        this.standardLairReq, //4: Guard Duty
        this.standardLairReq, //5: Lodging
        this.standardLairReq, //6: Heists
        this.standardLairReq, //7: Act I
        this.standardLairReq, //8: Communications
        this.standardLairReq //9: Starter Lair 
    ]

    schemeExp: Array<Array<Number>> = [
        this.standardExpArray, //0: Mastermind
        this.standardExpArray, //1: Cold Logic
        this.standardExpArray, //2: Quick Thinking
        this.standardExpArray, //3: Hired Help
        this.standardExpArray, //4: Guard Duty
        this.standardExpArray, //5: Lodging
        this.standardExpArray, //6: Heists
        this.standardExpArray, //7: Act I
        this.standardExpArray, //8: Communications
        [ 6000, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000 ] //9: Starter Lair
    ]   

    //Scheme Modifiers
    
    //00: Mastermind
    //1 scheme point per level per second.
    mastermindNumbers() {
        return this._player.schemes[0]['level'];
    }

    //01: Cold Logic
    coldLogicNumbers() {
        return this._player.schemes[1]['level']*60;
    }

    //02: Quick Thinking
    quickThinkingNumbers() {
        var successes = this.coinFlip(6);
        return successes >= 5 ? this._player.schemes[2]['level'] : 0;
    }

    //03: Hired Help
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

    //04: Guard Duty
    guardDutyTrainRate() {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[4]['level']; _i++) {
            if (_i == 1) { reduce += 60}
            if (_i == 3) { reduce += 60}
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
        if (id == 1) return this._player.schemes[6]['level'] > 3;
    }

    heistRarityChancesArray() {
        if (this._player.schemes[6]['level'] == 1) { 
            return [1, 1.1, 1.1, 1.1, 1.1] 
        }
        else if (this._player.schemes[6]['level'] >= 1 && this._player.schemes[6]['level'] <= 2) {
            return [.9, 1, 1.1, 1.1, 1.1]
        } else if (this._player.schemes[6]['level'] >= 3 && this._player.schemes[6]['level'] <= 5) {
            return [.8, .95, 1, 1.1, 1.1]
        }
    }

    heistRechargeRate() {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[6]['level']; _i++) {
            if (_i == 2) { reduce += 150}
        }
        return reduce;
    }

    //07: Shady Business Deals
    shadyBusinessDealUnlocked(id) {
        if (id == 5) return this._player.schemes[7]['level'] > 0;
        if (id == 6) return this._player.schemes[7]['level'] > 3;
    }

    shadyBusinessDealRarityChancesArray() {
        if (this._player.schemes[7]['level'] == 1) { 
            return [1, 1.1, 1.1, 1.1, 1.1] 
        }
        else if (this._player.schemes[7]['level'] >= 1 && this._player.schemes[7]['level'] <= 2) {
            return [.9, 1, 1.1, 1.1, 1.1]
        } else if (this._player.schemes[7]['level'] >= 3 && this._player.schemes[7]['level'] <= 5) {
            return [.8, .95, 1, 1.1, 1.1]
        }
    }


}