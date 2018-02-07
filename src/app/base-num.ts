import { Base } from './base';
import { Recruit } from './models/recruit';

export class BaseNum extends Base {

    constructor() {
        super();
    }

    //Foundational Variables
    static RECRUITS: Array<Recruit>;

    //Derived Structural Variables: Lairs
    get LAIR_LEVEL() {
        if (Base.SCHEMES[9].level > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    get LAIR_HP_MAX() {
        if (this.LAIR_LEVEL === 0) {
            return 10;
        } else if (this.LAIR_LEVEL === 1) {
            return 100;
        }
        return 10; //Expand later.
    }


    

    coinFlipChance = 0.5; //Here to be modified later.

    coinFlip(times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= this.coinFlipChance) { successes++ }
        }
        return successes;
    }

    //Scheme Modifiers
    
    //00: Mastermind
    //1 scheme point per level per second.
    get mastermindNumbers() {
        return Base.SCHEMES[0].level;
    }

    //01: Cold Logic
    get coldLogicNumbers() {
        return Base.SCHEMES[1].level*60;
    }

    //02: Quick Thinking
    get quickThinkingNumbers() {
        var successes = this.coinFlip(6);
        return successes >= 5 ? Base.SCHEMES[2].level : 0;
    }

    //03: Hired Help
    get hiredHelpCapacity() {
        var space = 0;
        for (var _i = 0; _i < Base.SCHEMES[3]['level']; _i++) {
            if (_i == 1) { space += 4 }
            if (_i == 3) { space += 5 }
        }
        return space;
    }
    
    hiredHelpUnlocked(id) {
        if (id == 0) {
            return Base.SCHEMES[3].level > 0;
        } else if (id == 1) {
            return Base.SCHEMES[3]['level'] >= 5;
        } else {
            return false;
        }
    }

    hiredHelpRecruitRate() {
        var reduce = 0;
        for (var _i = 0; _i < Base.SCHEMES[3].level; _i++) {
            if (_i == 2) { reduce += 30}
        }
        return reduce;
    }

    //05: Lodging
    lodgingNumbers() {
        var increase = 0
        for (var i = 0; i < Base.SCHEMES[5]['level']; i++) {
            if (i === 0) {increase += 10; }
            if (i === 1) {increase += 20; }
            if (i === 2) {increase += 60; }
            if (i === 3) {increase += 100; }
            if (i === 4) {increase += 200; }
        }
        return increase;
    }





}