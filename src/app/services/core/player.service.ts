import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
import { Scheme } from '../../models/scheme';
import { Recruit } from '../../models/recruit';

@Injectable()
export class PlayerService {


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