import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

@Injectable()
export class PlayerService {

    //Not yet implemented, but used for scheme prereqs
    lairLevel: number = 0;

    coinFlip(times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= 0.5) { successes++}
        }
        return successes;
    }

    //*****************************************************************************************
    //Schemes
    currentScheme: Object = {};
    currentSchemeLevel: number = 0;
    earningSchemePoints: boolean = false;

    //Primary scheme object. Stores level and accumulated exp toward next level by scheme ref.
    schemes: Array<Object> = [
        { level: 0, exp: 0 }, //0 Mastermind, fully coded.
        { level: 0, exp: 0 }, //1 Cold Logic, fully coded.
        { level: 20, exp: 0 }, //2 Quick Thinking, fully coded.
        { level: 0, exp: 0 }, //3 Hired Help
        { level: 0, exp: 0 }, //4 Guard Duty
        { level: 0, exp: 0 }
    ]

    //Scheme calculation setters
    earnSchemePoints(num) {
        this.schemes[this.currentScheme['ref']]['exp'] += num;
        if(this.schemes[this.currentScheme['ref']]['exp'] >= this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']]) {
            this.schemes[this.currentScheme['ref']]['level']++;
            this.schemes[this.currentScheme['ref']]['exp'] = 0;
            this.currentScheme = {};
            this.earningSchemePoints = false;
        }
        
    }

    report_ticks = 0;
    report_earned = 0;

    //Scheme calculation getters
    get schemePointsHatchedThisTick() {
        //Starting scheme points per tick is 0
        var hatched = 0;

        //Evil Research increases scheme points per tick by flipping coins
        var successes = this.coinFlip(6);
        for (var _i = 0; _i < this.schemes[2]['level']; _i++) {
            if (_i < 5) { hatched += successes >= 5 ? 1 : 0 }
            if (_i > 4 && _i < 10) { hatched += successes >= 5 ? 2 : 0}
            if (_i >9 && _i <15) { hatched += successes >= 5 ? 5 : 0}
            if (_i >14 && _i <20) { hatched += successes >- 5 ? 10 : 0}

        }

        this.report_ticks++;
        this.report_earned += hatched;
        console.log("Successes: " + successes + ", Ticks: " + this.report_ticks + ", earned: " + this.report_earned + ", PPS (should be 5): " + this.report_earned/(this.report_ticks/10));

        return hatched;

    }

    get schemePointsHatchedThisSecond() {
        //Starting scheme points per second is 1
        var hatched = 1;

        //Diabolic Genius increases scheme points per second
        for (var _i = 0; _i < this.schemes[0]['level']; _i++) {
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

        //Nefarious Logic increases scheme points per minute
        for (var _i = 0; _i < this.schemes[1]['level']; _i++) {
            if (_i < 5 ) { hatched += 60}
            if (_i > 4 && _i < 10) { hatched += 120 }
            if (_i > 9 && _i < 15) { hatched += 300 }
            if (_i > 14) { hatched += 600 } 
        }
        
        return hatched;
    }

    get currentSchemeEXP() {
        return this.schemes[this.currentScheme['ref']]['exp'];
    }

    get currentSchemeEXPTarget() {
        return  this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']*1]
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP/this.currentSchemeEXPTarget)*100);
    }

    schemeLearnable(scheme) {
        return this.lairLevel >= scheme['lair_req'][this.schemes[scheme['ref']]['level']];
    }

    setCurrentSchemeLevel() {
        this.currentSchemeLevel = (this.schemes[this.currentScheme['ref']]['level'] * 1) +1;
    }

    //*****************************************************************************************
    //Henchmen
    currentHenchmen: number = 0;
    helpWantedRateLock: number;
    helpWanted: Array<Object> = [
        {currentStore :  0, 
            percentage : 0, 
            magicModulo : -1, 
            full : false, 
            capacity: this.helpWantedCapacity, 
            unlocked: this.helpWanted1Unlocked}
    ]

    get henchmenCapacity() {
        //Base capacity is 10
        var capacity = 10;
        //Henchman Lodging
        var lodgingMod = 0;
        for (var i = 0; i < this.schemes[5]['level']; i++) {
            if (i < 2) {
                lodgingMod += 5;
            } else if (i > 1 && i < 4 ) {
                lodgingMod += 10;
            } else if (i == 4) {
                lodgingMod += 20;
            } else if (i == 5) {
                lodgingMod += 50;
            }
        }
        capacity += lodgingMod;
        return capacity;
    }

    get isHenchmenCapacityFull() {
        return this.currentHenchmen == this.henchmenCapacity;
    }


    //Recruitment Object - Help Wanted
    get helpWantedUnlocked() {
        return this.schemes[3]['level'] > 0;
    }

    get helpWanted1Unlocked() {
        return this.schemes[3]['level'] > 0;
    } 

    get helpWantedCapacity() {
        var capacity = 1;
        if (this.schemes[3]['level'] >= 3) {
            capacity += 2;
        }
        if (this.schemes[3]['level'] >= 5) {
            capacity += 7;
        }
        return capacity;
    }

    get helpWantedRate() {
      var rate = 60;
      if (this.schemes[3]['level'] >= 2) {
          rate -= 15;
      }
      if (this.schemes[3]['level'] >= 4) {
          rate -= 15;
      }  
      return rate;
    } 

    isGuardTrainingHappening: boolean = false;
    currentGuards: number = 0;
    guardTrainingRateLock : number;
    training: Array<Object> = [
        {currentStore :  0, 
            percentage : 0, 
            magicModulo : -1, 
            full : false, 
            capacity: this.guardTrainingCapacity, 
            unlocked: this.guardTrainingUnlocked,
            queued: 0}
    ]

    get guardTrainingUnlocked() {
        return this.schemes[4]['level'] >= 1;
    }

    get guardTrainingCapacity () {
        var capacity = 1;
        if (this.schemes[4]['level'] >= 2) {
            capacity += 4;
        }
        return capacity;
    }
    
    get guardCapacity () {
        return 10;
    }

    get guardTrainingRate () {
        return 500;
    }

    get isGuardCapacityFull() {
        return this.currentGuards == this.guardCapacity;
    }

    

    
    





    

    

    

}