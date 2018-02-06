import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from "./core/numbers.service";
import { Train } from "../models/train";
import { Base } from "../base";

@Injectable()
export class TrainingService extends Base {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _inventory: InventoryService) {
            super();
         }


    //STRUCTURAL VARIABLES
    trains: Array<Train>; //Raw Training objects. Constructed by app.component.

    //Section displays only if a recruiting object has been unlocked
    areAnyUnlocked() {
        for (var _i = 0; _i < this.trains.length; _i++) {
            if (this.trains[_i].isUnlocked) {
                return true;
            }
        }
        return false;
    }

    /*
    getCapacityById(id) {
    if (id == 0) { //Guard Training Capacity
        //Starting capacity is 1
        var capacity = 1;

        //Guard Duty increases capacity by static amounts.
        for (var _i = 0; _i < Base.SCHEMES[4]['level']; _i++) {
            if (_i == 2) { capacity += 9; }
        }

        return capacity;
    }
}
    getUpgradeNameById(id) {
        if (id == 0) { return "Guard" }
    }

    getFaById(id) {
        if (id == 0) { return "fa-shield" }
    }
 
isUnlockedById(id) {
    if (id == 0) { return Base.SCHEMES[4]['level'] > 0; }
}*/


    isTrainingById(id) {
        if (this.trains[id].isUnlocked) {
            if (!this.trains[id].isFull) {
                if (this._player.training[id]['queued'] > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    get guardTrainingUnlocked() {
        return Base.SCHEMES[4]['level'] >= 1;
    }

    get guardCapacity() {
        return 10;
    }

    get guardTrainingRate() {
        return 500;
    }

    training: boolean = false;

    canTrainById(id) {
        if (this._player.currentHenchmen > 0) {
            if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.trains[id].capacity) {
                return true;
            }
        }
        return false
    }

    trainById(id) {
        if (id == 0) { //Guards
            if (this._player.currentHenchmen > 0) {
                if (!this.training) {
                    if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.trains[id].capacity) {
                        this.training = true;
                        this._player.currentHenchmen--;
                        this._player.training[id]['queued']++;
                        this.training = false;
                    }
                }
            }
        }
    }

    collecting: boolean = false;

    collectById(id) {
        if (this._player.training[id]['currentStore'] > 0) {
            if (!this.collecting == true) {
                for (var _i = 0; _i < this._player.training[id]['currentStore']; _i++) {
                    if (this._player.currentGuards < this._inventory.guardCapacity) {
                        this._player.currentGuards++;
                        this._player.training[id]['currentStore']--;
                    }
                }
                if (!this.isTrainingById(id)) {
                    this.resetCountdownById(id);
                }
                this.collecting = false;
            }
        }
    }

    getPercentageById(id) {
        if (this.isTrainingById(id)) {
            return 100 * (1 - (this._player.training[0]['countdown'] / this._player.training[0]['lock']))
        } else {
            if (this.canTrainById(id)) {
                return 0;
            } else {
                if (this._player.training[0]['currentStore'] > 0) {
                    return 100;
                }
            }
        }
        return 0
    }

    getTrainingCountdownById(id) {
        if (id == 0) { //Guard Training
            var rate = 600;
            rate -= this._numbers.guardDutyTrainRate();
            return rate;
        }
    }

    resetCountdownById(id) {
        this._player.training[id]['countdown'] = this.getTrainingCountdownById(id);
        this._player.training[id]['lock'] = this.getTrainingCountdownById(id);
    }

    tickById(id) {
        if (this._player.training[0]['countdown'] == 0 && this._player.training[0]['lock'] == 0) {
            this.resetCountdownById(id);
        }
        this._player.training[id]['countdown']--;
        if (this._player.training[id]['countdown'] == 0) {
            this._player.training[id]['currentStore']++;
            this._player.training[id]['queued']--;
            if (!this.trains[id].isFull && this._player.training[id]['queued'] > 0) {
                this.resetCountdownById(id);
            }
        }
    }














}