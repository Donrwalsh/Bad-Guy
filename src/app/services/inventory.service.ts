import { Injectable } from "@angular/core";
import { NumbersService } from "./core/numbers.service";
import { PlayerService } from "./core/player.service";
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class InventoryService extends BaseNum {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService) {
            super();
    }

    //While the player service holds the current inventory variables, this service busies
    //itself with deriving capacity and other derived inventory values.

    get guardCapacity() {
        return 10 //No modifiers yet.
    }

    isHenchmenUpgradeFullById(id) {
        if (id == 0) { return this.isGuardCapacityFull }
    }

    get isGuardCapacityFull() {
        return this._player.currentGuards == this.guardCapacity;
    }

    get henchmenCapacity() {
        var capacity = 10;
        capacity += this.lodgingNumbers();
        return capacity;
    }

    get isHenchmenCapacityFull() {
        return Base.CURRENT_HENCHMEN == this.henchmenCapacity;
    }

}