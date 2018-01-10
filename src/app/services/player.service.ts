import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

@Injectable()
export class PlayerService {

    //Everything in this service is saved. All game details can be derived from this service.

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

    //Henchmen
    currentHenchmen: number = 0;
    recruiting: Array<Object> = [
        {currentStore : 0, capacity : 0, countdown : 0, lock : 0 } //Help Wanted 1
    ]

    //Old stuff


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