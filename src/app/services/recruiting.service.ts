import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { InventoryService } from "./inventory.service";

@Injectable()
export class RecruitingService {

    constructor(public _player: PlayerService,
    public _inventory: InventoryService) { }

    getCapacityById(id) {
        if (id == 0 || id == 1) { //Help Wanted Objects
            //Starting capacity is 1
            var capacity = 1;

            //Hired Help increases capacity by static amounts.
            for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
                if (_i == 1) { capacity += 4 }
                if (_i == 3) { capacity += 5 }
            }

            return capacity;
        }
    }

    getPercentageById(id) {
        if (this.isRecruitingById(id)) {
            return 100*(1-(this._player.recruiting[id]['countdown']/this._player.recruiting[id]['lock']))
        } else {
            return 100
        }
    }

    getRecruitmentNameById(id) {
        if(id == 0) {return "Sign Stapled to a Post"}
        if(id == 1) {return "Newspaper Ad"}
    }

    getFaById(id) {
        if (id == 0) {return "fa-user"}
        if (id == 1) {return "fa-user"}
    }

    isUnlockedById(id) {
        if (id == 0) { return this._player.schemes[3]['level'] > 0; }
        if (id == 1) { return this._player.schemes[3]['level'] >= 4; }
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
            //Starting recruitment rate is 60 seconds.
            var rate = 600;

            //Hired Help reduces the rate by static amounts.
            for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
                if (_i == 2) { rate -= 150 }
            }

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
        if (this._player.recruiting[id]['countdown'] == 0 && this._player.recruiting[id]['lock'] == 0) {
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