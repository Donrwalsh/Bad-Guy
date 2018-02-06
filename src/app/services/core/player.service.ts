import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
import { Scheme } from '../../models/scheme';
import { Recruit } from '../../models/recruit';

@Injectable()
export class PlayerService {

    //Henchmen
    currentHenchmen: number = 0;
    recruiting: Array<Object> = [
        {id: 0, currentStore: 0, countdown: 0, lock: 0 }, //Help Wanted 1
        {id: 1, currentStore: 0, countdown: 0, lock: 0 } //Help Wanted 2
    ]

    //Improved Henchmen
    currentGuards: number = 0;
    training: Array<Object> = [
        {currentStore :  0, capacity : 0, queued : 0, countdown : 0, lock : 0} //Guards
            
    ]

    //Operations
    operating: Array<Object> = [
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},//Heists 1
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},//Heists 2
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},//Heists 3
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},//Heists 4
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0}, //Heists 5
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0},
        {name: '', rarity: -1, henchmen : -1, available: true, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0} 
    ]

    cash = 0;

    notoriety : number = 0;
    
}