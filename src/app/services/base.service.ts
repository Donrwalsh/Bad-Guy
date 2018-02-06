import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';
import { Base } from '../base';

@Injectable()
export class BaseService extends Base {

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
}