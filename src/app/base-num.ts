import { Base } from './base';

export class BaseNum extends Base {

    constructor() {
        super();
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


}