import { Injectable } from "@angular/core";
import { InventoryService } from "./inventory.service";
import { OperatingService } from './operating.service';
import { BaseNum } from '../base-num';
import { Base } from '../base';

@Injectable()
export class LairService extends BaseNum {

    constructor(public _operating: OperatingService,
        public _inventory: InventoryService) {
        super();
    }

    //Actual Lair Stat Numbers getters.
    
    //Danger = ATK. Raw physical damage that lairs deal to attacking heroes each round.
    get danger() {
        var danger = 0;
        danger += this.beginnerLairDanger();
        return danger;
    }

    get fortification() {
        var fortification = 0;
        fortification += this.kingsCastleFortification();
        return fortification;
    }

    get lairName() {
        if (this.LAIR_LEVEL == 0) {
            return "Mom's Basement";
        } else if (this.LAIR_LEVEL == 1) {
            return "Run-Down Rental";
        }
    }



    get percentageHP() {
        return 100 * (Base.CURRENT_LAIR_HP / this.LAIR_HP_MAX);
    }

    get hpPerGuard() {
        return 3; //expand later.
    }

    get atkPerGuard() {
        return 1; // expand later.
    }




}