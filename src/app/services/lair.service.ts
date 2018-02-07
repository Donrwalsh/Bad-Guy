import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';
import { BaseNum } from '../base-num';
import { Base } from '../base';

@Injectable()
export class LairService extends BaseNum {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _operating: OperatingService,
        public _inventory: InventoryService) {
            super();
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