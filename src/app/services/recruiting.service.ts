import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { NumbersService } from './core/numbers.service';
import { OperatingService } from './operating.service';
import { Recruit } from '../models/recruit';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class RecruitingService extends BaseNum {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService,
        public _operating: OperatingService,
        public _inventory: InventoryService) {
        super();
    }

    //STRUCTURAL VARIABLES
    //recruits: Array<Recruit>; //Raw Recruitment objects. Constructed by app.component.
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
    collectById(id) {
        if (BaseNum.RECRUITS[id].currentStore > 0) {
            if (!this.collecting) {
                this.collecting = true;
                var collectMarker = BaseNum.RECRUITS[id].currentStore;
                for (var _i = 0; _i < collectMarker; _i++) {
                    if (Base.CURRENT_HENCHMEN < this._inventory.henchmenCapacity) {
                        Base.CURRENT_HENCHMEN++;
                        BaseNum.RECRUITS[id].currentStore--;
                    }
                }
                if (BaseNum.RECRUITS[id].countdown == 0) {
                    this.resetCountdownById(id);
                }
                this.collecting = false;
            }
        }
    }

    //Determinining countdown numbers
    getRecruitingCountdownById(id) {
        if (id == 0 || id == 1) { //Help Wanted Objects
            var rate = 300;
            rate -= this.hiredHelpRecruitRate()
            return rate;
        }
    }

    resetCountdownById(id) {
        BaseNum.RECRUITS[id].countdown = this.getRecruitingCountdownById(id);
        BaseNum.RECRUITS[id].lock = this.getRecruitingCountdownById(id);
    }

    //LOOP
    tickById(id) {
        if (BaseNum.RECRUITS[id].countdown == 0) {
            this.resetCountdownById(id);
        }
        BaseNum.RECRUITS[id].countdown--;
        if (BaseNum.RECRUITS[id].countdown == 0) {
            BaseNum.RECRUITS[id].currentStore++;
            if (!this.isFull(BaseNum.RECRUITS[id])) {
                this.resetCountdownById(id);
            }
        }
    }

}