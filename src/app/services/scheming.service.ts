import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
import { PlayerService } from "./player.service";

@Injectable()
export class SchemingService {

    //Belongs elsewhere.
    coinFlip(times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= 0.5) { successes++}
        }
        return successes;
    }

    constructor(public _player: PlayerService) { }

    currentScheme: Object = {};
    currentSchemeLevel: number = 0;
    earningSchemePoints: boolean = false;

    //Scheme calculation setters
    earnSchemePoints(num) {
        this._player.schemes[this.currentScheme['ref']]['exp'] += num;
        if(this._player.schemes[this.currentScheme['ref']]['exp'] >= this.currentScheme['exp'][this._player.schemes[this.currentScheme['ref']]['level']]) {
            this._player.schemes[this.currentScheme['ref']]['level']++;
            this._player.schemes[this.currentScheme['ref']]['exp'] = 0;
            this.currentScheme = {};
            this.earningSchemePoints = false;
        }
    }

    //Scheme calculation getters
    get schemePointsHatchedThisTick() {
        //Starting scheme points per tick is 0
        var hatched = 0;

        //Quick Thinking increases scheme points per tick by flipping coins
        var successes = this.coinFlip(6);
        for (var _i = 0; _i < this._player.schemes[2]['level']; _i++) {
            if (_i < 5) { hatched += successes >= 5 ? 1 : 0 }
            if (_i > 4 && _i < 10) { hatched += successes >= 5 ? 2 : 0}
            if (_i >9 && _i <15) { hatched += successes >= 5 ? 5 : 0}
            if (_i >14 && _i <20) { hatched += successes >- 5 ? 10 : 0}
        }

        return hatched;
    }

    get schemePointsHatchedThisSecond() {
        //Starting scheme points per second is 1
        var hatched = 1;

        //Mastermind increases scheme points per second
        for (var _i = 0; _i < this._player.schemes[0]['level']; _i++) {
            if (_i < 5 ) { hatched += 1}
            if (_i > 4 && _i < 10) { hatched += 2 }
            if (_i > 9 && _i < 15) { hatched += 5 }
            if (_i > 14) { hatched += 10 } 
        }

        return hatched;
    }

    get schemePointsHatchedThisMinute() {
        //Starting scheme points per minute is 0
        var hatched = 0;

        //Cold Logic increases scheme points per minute
        for (var _i = 0; _i < this._player.schemes[1]['level']; _i++) {
            if (_i < 5 ) { hatched += 60}
            if (_i > 4 && _i < 10) { hatched += 120 }
            if (_i > 9 && _i < 15) { hatched += 300 }
            if (_i > 14) { hatched += 600 } 
        }
        
        return hatched;
    }

    get currentSchemeEXP() {
        return this._player.schemes[this.currentScheme['ref']]['exp'];
    }

    get currentSchemeEXPTarget() {
        return  this.currentScheme['exp'][this._player.schemes[this.currentScheme['ref']]['level']*1]
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP/this.currentSchemeEXPTarget)*100);
    }

    schemeLearnable(scheme) {
        return this._player.lairLevel >= scheme['lair_req'][this._player.schemes[scheme['ref']]['level']];
    }

    setCurrentSchemeLevel() {
        this.currentSchemeLevel = (this._player.schemes[this.currentScheme['ref']]['level'] * 1) +1;
    }

}