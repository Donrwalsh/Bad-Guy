import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';

@Injectable()
export class RecruitingService {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _operating: OperatingService,
        public _inventory: InventoryService) { }

    getCapacityById(id) {
        if (id == 0 || id == 1) { //Help Wanted Objects
            var capacity = 1;
            capacity += this._numbers.hiredHelpCapacity();
            return capacity;
        }
    }

    getPercentageById(id) {
        if (this.isRecruitingById(id)) {
            return 100 * (1 - (this._player.recruiting[id]['countdown'] / this._player.recruiting[id]['lock']))
        } else {
            return 100
        }
    }

    getRecruitmentNameById(id) {
        if (id == 0) { return "Sign Stapled to a Post" }
        if (id == 1) { return "Newspaper Ad" }
    }

    getFaById(id) {
        if (id == 0) { return "fa-user" }
        if (id == 1) { return "fa-user" }
    }

    isUnlockedById(id) {
        if (id == 0 || id == 1) {//Help Wanted Objects
            return this._numbers.hiredHelpUnlocked(id);
        }
    }

    areAnyUnlocked() {
        for (var _i = 0; _i < this._player.recruiting.length; _i++) {
            if (this.isUnlockedById(_i)) {
                return true;
            }
        }
        return false;
    }

    isFullById(id) {
        return this._player.recruiting[id]['currentStore'] == this.getCapacityById(id);
    }

    collecting: boolean = false;

    collectById(id) {
        if (this._player.recruiting[id]['currentStore'] > 0) {
            if (!this.collecting) {
                this.collecting = true;
                var collectMarker = this._player.recruiting[id]['currentStore'];
                for (var _i = 0; _i < collectMarker; _i++) {
                    if (this._player.currentHenchmen < this._inventory.henchmenCapacity) {
                        this._player.currentHenchmen++;
                        this._player.recruiting[id]['currentStore']--;
                    }
                }
                if (this._player.recruiting[id]['countdown'] == 0) {
                    this.resetCountdownById(id);
                }
                this.collecting = false;
            }
        }
    }




    getRecruitingCountdownById(id) {
        if (id == 0 || id == 1) { //Help Wanted Objects
            var rate = 50;
            rate -= this._numbers.hiredHelpRecruitRate()
            return rate;
        }
    }

    isRecruitingById(id) {
        if (this.isUnlockedById(id)) {

            if (!this.isFullById(id)) {
                return true;
            }
        }
        return false;
    }

    resetCountdownById(id) {
        this._player.recruiting[id]['countdown'] = this.getRecruitingCountdownById(id);
        this._player.recruiting[id]['lock'] = this.getRecruitingCountdownById(id);
    }


    tickById(id) {
        if (this._player.recruiting[id]['countdown'] == 0) {
            this.resetCountdownById(id);
        }
        this._player.recruiting[id]['countdown']--;
        if (this._player.recruiting[id]['countdown'] == 0) {
            this._player.recruiting[id]['currentStore']++;
            if (!this.isFullById(id)) {
                this.resetCountdownById(id);
            }
        }
    }

}