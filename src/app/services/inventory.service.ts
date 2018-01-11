import { Injectable } from "@angular/core";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
import { PlayerService } from "./player.service";

@Injectable()
export class InventoryService {

    constructor ( public _player: PlayerService) {

    }

    //While the player service holds the current inventory variables, this service busies
    //itself with deriving capacity and other derived inventory values.

    get guardCapacity() {
        return 10 //No modifiers yet.
    }

    get isGuardCapacityFull() {
        return this._player.currentGuards == this.guardCapacity;
    }

    get henchmenCapacity() {
        //Base capacity is 10
        var capacity = 10;

        //Henchman Lodging increases this value by a static amount.
        for (var i = 0; i < this._player.schemes[5]['level']; i++) {
            if (i < 2) {
                capacity += 5;
            } else if (i > 1 && i < 4 ) {
                capacity += 10;
            } else if (i == 4) {
                capacity += 20;
            } else if (i == 5) {
                capacity += 50;
            }
        }
        
        return capacity;
    }

    get isHenchmenCapacityFull() {
        return this._player.currentHenchmen == this.henchmenCapacity;
    }    

}