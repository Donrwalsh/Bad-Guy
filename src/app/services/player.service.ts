import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

@Injectable()
export class PlayerService {

    //Not yet implemented, but used for scheme prereqs
    lairLevel: number = 0;

    //Primary scheme object. Stores level and accumulated exp toward next level by scheme ref.
    schemes: Array<Object> = [
        { level: 0, exp: 0 }, //0 Mastermind, fully coded.
        { level: 0, exp: 0 }, //1 Cold Logic, fully coded.
        { level: 0, exp: 0 }, //2 Quick Thinking, fully coded.
        { level: 0, exp: 0 }, //3 Hired Help
        { level: 0, exp: 0 }, //4 Guard Duty
        { level: 0, exp: 0 } //5 Henchmen Lodging
    ]

    //*****************************************************************************************
    //Henchmen
    currentHenchmen: number = 0;

    recruiting: Array<Object> = [
        {currentStore : 0, capacity : 0, countdown : 0, lock : 0 } //Help Wanted 1
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