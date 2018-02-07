import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class BaseService extends BaseNum {

    //Serving up Base variables for templates is all this service does.

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _operating: OperatingService,
        public _inventory: InventoryService) {
        super();
    }

    get earningSchemePoints() {
        return Base.EARNING_SCHEME_POINTS;
    }

    get initialLoadSchemes() {
        return Base.INITIAL_LOAD_SCHEMES;
    }

    get schemes() {
        return Base.SCHEMES;
    }

    get currentScheme() {
        return Base.CURRENT_SCHEME;
    }

    get currentHenchmen() {
        return Base.CURRENT_HENCHMEN;
    }
    
    get currentLairHP() {
        return Base.CURRENT_LAIR_HP;
    }

    get currentGuards() {
        return Base.CURRENT_GUARDS;
    }

    //BaseNum
    get recruits() {
        return BaseNum.RECRUITS;
    }

    get trains() {
        return BaseNum.TRAINS;
    }

    get initialLoadRecruits() {
        return Base.INITIAL_LOAD_RECRUITS;
    }

    get lairMaxHP() {
        return this.LAIR_HP_MAX;
    }

}