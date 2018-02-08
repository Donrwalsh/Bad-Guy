import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { OperatingService } from './operating.service';
import { Recruit } from '../models/recruit';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class RecruitingService extends BaseNum {

    constructor(public _player: PlayerService,
        public _operating: OperatingService,
        public _inventory: InventoryService) {
        super();
    }

    collecting: boolean = false; //Collection lockout

    isUnlocked(recruit: Recruit) {
        if (recruit.type == "help-wanted") {
            return this.hiredHelpUnlocked(recruit.id);
        }
    }

    capacity(recruit: Recruit) {
        if (recruit.type == 'help-wanted') {
            var capacity = 1;
            capacity += this.hiredHelpCapacity;
            return capacity;
        }
    }

    isFull(recruit: Recruit) {
        return recruit.currentStore == this.capacity(recruit);
    }

    isRecruiting(recruit: Recruit) {
        return this.isUnlocked(recruit) && !this.isFull(recruit);
    }

    percentage(recruit: Recruit) {
        if (this.isRecruiting(recruit)) {
            return 100 * (1 - (recruit.countdown / recruit.lock))
        } else {
            return 100
        }
    }

    //Section displays only if a recruiting object has been unlocked
    areAnyUnlocked() {
        for (var _i = 0; _i < BaseNum.RECRUITS.length; _i++) {
            if (this.isUnlocked(BaseNum.RECRUITS[_i])) {
                return true;
            }
        }
        return false;
    }

    //ACTIONS

    //Harvesting training objects.
    collectRecruit(recruit: Recruit) {
        if (recruit.currentStore > 0) {
            if (!this.collecting) {
                this.collecting = true;
                var collectMarker = recruit.currentStore;
                for (var _i = 0; _i < collectMarker; _i++) {
                    if (Base.CURRENT_HENCHMEN < this._inventory.henchmenCapacity) {
                        Base.CURRENT_HENCHMEN++;
                        recruit.currentStore--;
                    }
                }
                if (recruit.countdown == 0) {
                    this.resetRecruitCountdown(recruit);
                }
                this.collecting = false;
            }
        }
    }

    //Determinining countdown numbers
    recruitCountdown(recruit: Recruit) {
        if (recruit.id == 0 || recruit.id == 1) { //Help Wanted Objects
            var rate = 300;
            rate -= this.hiredHelpRecruitRate()
            return rate;
        }
    }

    resetRecruitCountdown(recruit: Recruit) {
        recruit.countdown = this.recruitCountdown(recruit);
        recruit.lock = this.recruitCountdown(recruit);
    }

    //LOOP
    recruitTick(recruit: Recruit) {
        if (recruit.countdown == 0) {
            this.resetRecruitCountdown(recruit);
        }
        recruit.countdown--;
        if (recruit.countdown == 0) {
            recruit.currentStore++;
            if (!this.isFull(recruit)) {
                this.resetRecruitCountdown(recruit);
            }
        }
    }

}