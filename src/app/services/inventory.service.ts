import { Injectable } from "@angular/core";
import { NumbersService } from "./core/numbers.service";
import { PlayerService } from "./core/player.service";

@Injectable()
export class InventoryService {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService) {

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
        capacity += this._numbers.lodgingNumbers();
        return capacity;
    }

    get isHenchmenCapacityFull() {
        return this._player.currentHenchmen == this.henchmenCapacity;
    }

}