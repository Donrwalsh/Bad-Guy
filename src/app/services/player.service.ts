import { Injectable } from "@angular/core";

@Injectable()
export class PlayerService {

    //*****************************************************************************************
    //Schemes
    currentScheme: Object = {};
    currentSchemeLevel: number = 0;
    earningSchemePoints: boolean = false;
    lairLevel: number = 0;
    schemes: Array<Object> = [
        { level: 0, exp: 0 }, //0 Diabolical Mastermind
        { level: 0, exp: 0 },
        { level: 0, exp: 0 },
        { level: 5, exp: 0 }, //3 Hired Help
        { level: 0, exp: 0 }, 
        { level: 0, exp: 0 }
    ]

    get currentSchemeEXP() {
        return this.schemes[this.currentScheme['ref']]['exp'];
    }

    get currentSchemeEXPTarget() {
        return  this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']*1]
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP/this.currentSchemeEXPTarget)*100);
    }

    currentSchemeJustLearned() {
        return this.schemes[this.currentScheme['ref']]['exp'] >= this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']];
    }

    levelCurrentScheme() {
        this.schemes[this.currentScheme['ref']]['level']++;
        this.schemes[this.currentScheme['ref']]['exp'] = 0;
        this.currentScheme = {};
        this.earningSchemePoints = false;
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

    get isHechmenCapacityFull() {
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


    

    
    





    

    

    

}