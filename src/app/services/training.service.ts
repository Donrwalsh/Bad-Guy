import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { InventoryService } from "./inventory.service";

@Injectable()
export class TrainingService {

    constructor(public _player: PlayerService,
        public _inventory: InventoryService) { }

    getCapacityById(id) {
        if (id == 0) { //Guard Training Capacity
            //Starting capacity is 1
            var capacity = 1;

            //Guard Duty increases capacity by static amounts.
            for (var _i = 0; _i < this._player.schemes[4]['level']; _i++) {
                if (_i == 2) { capacity += 9; }
            }

            return capacity;
        }
    }

    isUnlockedById(id) {
        if (id == 0) { return this._player.schemes[4]['level'] > 0; }
    }

    areAnyUnlocked() {
        for (var _i = 0; _i < this._player.training.length; _i++) {
            if (this.isUnlockedById(_i)) {
                return true;
            }
        }
        return false;
    }

    getUpgradeNameById(id) {
        if(id == 0) {return "Guard"}
    }

    getFaById(id) {
        if (id == 0) {return "fa-shield"}
    }

    isFullById(id) {
        return this._player.training[id]['currentStore'] == this.getCapacityById(id);
    }

    isTrainingById(id) {
        if (this.isUnlockedById(id)) {
            if (!this.isFullById(id)) {
                if (this._player.training[id]['queued'] > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    get guardTrainingUnlocked() {
        return this._player.schemes[4]['level'] >= 1;
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
            if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.getCapacityById(id)) {
                return true;
            }
        }
        return false
    }

    trainById(id) {
        if (id == 0) { //Guards
            if (this._player.currentHenchmen > 0) {
                if (!this.training) {
                    if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.getCapacityById(id)) {
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
            return 100*(1-(this._player.training[0]['countdown']/this._player.training[0]['lock']))
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
            //Starting training rate is 10 minutes.
            var rate = 6000;

            //Guard duty reduces this amount by static time.
            for (var _i = 0; _i < this._player.schemes[4]['level']; _i++) {
                if (_i == 1) { rate -= 600 }
                if (_i == 3) { rate -= 600 }
            }

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
            if (!this.isFullById(id) && this._player.training[id]['queued'] > 0) {
                this.resetCountdownById(id);
            }
        }
    }














}