import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';

@Injectable()
export class HeroesService {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _operating: OperatingService,
        public _inventory: InventoryService) { }


    get prettyNotoriety() {
        return this._player.notoriety/10;
    }

        notorietyToDegrees(id) {
            if (id == 0) {
                var degs = 0;
                for (var _i = 1; _i < this._player.notoriety; _i ++) {
                    degs += 1.8;
                }
                return degs;
            }
        }
}