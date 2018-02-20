import { Injectable } from "@angular/core";
import { InventoryService } from "./inventory.service";
import { OperatingService } from './operating.service';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class HeroesService extends BaseNum {

    constructor(public _operating: OperatingService,
        public _inventory: InventoryService) {
            super();
         }

    checkRange(min, max) {
        return Base.NOTORIETY >= min && Base.NOTORIETY < max;
    }

    get notorietyTier() {
        if (this.checkRange(0, 1)) { return 0; }
        if (this.checkRange(1, 10)) { return 1; }
        if (this.checkRange(10, 100)) { return 2; }
        if (this.checkRange(100, 1000)) { return 3; }
        if (this.checkRange(1000, 10000)) { return 4; }
        else { return 5;}
    }

    notorietySpinnerPercent() {
        switch (this.notorietyTier) {
            case 0 : { return Base.NOTORIETY * 180 }
            case 1 : { return Base.NOTORIETY * 18 + 360 }
            case 2 : { return Base.NOTORIETY * 1.8 + 720 }
            case 3 : { return Base.NOTORIETY * .18 + 1080 }
            case 4 : { return Base.NOTORIETY * .018 + 1440 }
            case 5 : { return 1620 }
        }
        
    }

    get notorietyTierName() {
        return [
            "Unknown", 
            "Criminal",
            "Crimelord",
            "Despot",
            "Tyrant",
            "Supreme Overlord"][this.notorietyTier]
    }

}