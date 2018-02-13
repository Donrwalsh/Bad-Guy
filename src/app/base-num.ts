import { Base } from './base';
import { Recruit } from './models/recruit';
import { Train } from './models/train';
import { Operation } from './models/operation';

export class BaseNum extends Base {

    constructor() {
        super();
    }

    //Foundational Variables
    static RECRUITS: Array<Recruit>;
    static TRAINS: Array<Train>;
    static OPERATIONS: Array<Operation>;

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

    FaColor(rarity) {
        if (rarity == 0) { return 'black' }
        if (rarity == 1) { return 'green' }
        if (rarity == 2) { return 'blue' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
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
        return Base.SCHEMES[1].level * 60;
    }

    //02: Quick Thinking
    get quickThinkingNumbers() {
        var successes = this.coinFlip(6);
        return successes >= 5 ? Base.SCHEMES[2].level : 0;
    }

    //03: Hired Help
    get hiredHelpCapacity() {
        var space = 0;
        for (var _i = 0; _i < Base.SCHEMES[3].level; _i++) {
            if (_i == 1) { space += 4 }
            if (_i == 3) { space += 5 }
        }
        return space;
    }

    hiredHelpUnlocked(id) {
        if (id == 0) {
            return Base.SCHEMES[3].level > 0;
        } else if (id == 1) {
            return Base.SCHEMES[3].level >= 5;
        } else {
            return false;
        }
    }

    hiredHelpRecruitRate() {
        var reduce = 0;
        for (var _i = 0; _i < Base.SCHEMES[3].level; _i++) {
            if (_i == 2) { reduce += 90 }
        }
        return reduce;
    }

    //04: Guard Duty
    guardDutyTrainRate() {
        var reduce = 0;
        for (var _i = 0; _i < Base.SCHEMES[4].level; _i++) {
            if (_i == 1) { reduce += 30 }
            if (_i == 3) { reduce += 30 }
        }
        return reduce;
    }

    guardDutyUnlocked() {
        return Base.SCHEMES[4].level > 0;
    }

    guardDutyCapacity() {
        var capacity = 0;
        for (var _i = 0; _i < Base.SCHEMES[4].level; _i++) {
            if (_i == 2) { capacity += 2; }
        }

        return capacity;
    }

    //05: Lodging
    lodgingNumbers() {
        var increase = 0
        for (var i = 0; i < Base.SCHEMES[5].level; i++) {
            if (i === 0) { increase += 10; }
            if (i === 1) { increase += 20; }
            if (i === 2) { increase += 60; }
            if (i === 3) { increase += 100; }
            if (i === 4) { increase += 200; }
        }
        return increase;
    }

    //06: Heists
    heistUnlocked(id) {
        if (id === 0) return Base.SCHEMES[6].level > 0;
        if (id === 1) return Base.SCHEMES[6].level >= 3;
    }

    heistCountdown() {
        var countdown = 600
        if (Base.SCHEMES[6].level >= 2) {
            countdown -= 150;
        }
        return countdown;
    }

    heistCost(rarity) {
        var base = [0, 10, 100, 1000, 10000];
        var maxArray = [5, 50, 500, 5000, 500000];
        if (rarity === 0 && Base.SCHEMES[6].level >= 2) {
            var max = maxArray[rarity]*2;
        } else {
            var max = maxArray[rarity]
        }
        return base[rarity] + Math.ceil(Math.random() * max)
    }

    heistRarityChancesArray() {
        var matrix = [
            [1, 1, 1, 1, 1], //1
            [1, 1, 1, 1, 1], //2
            [1, 1, 1, 1, 1], //3
            [1, 1, 1, 1, 1], //4 
            [.9, 1, 1, 1, 1], //5 - occasionally plot advanced (10%)
        ]
        return matrix[Base.SCHEMES[6].level-1]
    }

    //07: Shady Business Deals
    shadyBusinessDealsUnlocked(id) {
        if (id === 5) return Base.SCHEMES[7].level > 0;
        if (id === 6) return Base.SCHEMES[7].level > 3;
    }

    shadyBusinessDealRarityChancesArray() {
        var matrix = [
            [1, 1, 1, 1, 1], //1
            [1, 1, 1, 1, 1], //2
            [1, 1, 1, 1, 1], //3
            [1, 1, 1, 1, 1], //4 
            [.9, 1, 1, 1, 1], //5 - occasionally plot advanced (10%)
        ]
        return matrix[Base.SCHEMES[7].level-1]
    }

    shadyBusinessDealCost(rarity) {
        var base = [0, 10, 100, 1000, 10000];
        var maxArray = [5, 50, 500, 5000, 500000];
        if (rarity === 0 && Base.SCHEMES[7].level >= 2) {
            var max = maxArray[rarity]*2;
        } else {
            var max = maxArray[rarity]
        }
        return (base[rarity] + Math.ceil(Math.random() * max))*10;
    }

    shadyBusinessDealCountdown() {
        var countdown = 1200
        if (Base.SCHEMES[7].level >= 1) {
            countdown -= 300;
        }
        return countdown;
    }

    //08: Communications
    communicationsMultiplier() {
        var multiplier = 1;
        for (var _i = 0; _i < Base.SCHEMES[8].level; _i++) {
            multiplier -= .05;
        }
        return multiplier;
    }
















    






}