import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { InventoryService } from "./inventory.service";
import { Train } from "../models/train";
import { Base } from "../base";
import { BaseNum } from "../base-num";

@Injectable()
export class TrainingService extends BaseNum {

    constructor(public _player: PlayerService,
        public _inventory: InventoryService) {
        super();
    }

    //Lockouts
    training: boolean = false;
    collecting: boolean = false;

    areAnyUnlocked() {
        return this.isUnlocked(BaseNum.TRAINS[0]) || this.isUnlocked(BaseNum.TRAINS[1]); //etc.
    }

    get guardTrainingUnlocked() {
        return this.isUnlocked(BaseNum.TRAINS[0])
    }

    isUnlocked(train: Train) {
        if (train.id == 0) { //Guards
            return this.guardDutyUnlocked();
        }
    }

    capacity(train: Train) {
        if (train.id === 0) {
            var capacity = 1;
            capacity += this.guardDutyCapacity();
            return capacity;
        }
    }

    isFull(train: Train) {
        return train.currentStore == this.capacity(train);
    }

    isTraining(train: Train) {
        if (this.isUnlocked(train)) {
            if (!this.isFull(train)) {
                if (train.queued > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    trainCountdown(train: Train) {
        if (train.id == 0) { //Guard Training
            var rate = 600;
            rate -= this.guardDutyTrainRate();
            return rate;
        }
    }

    resetTrainCountdown(train: Train) {
        train.countdown = this.trainCountdown(train);
        train.lock = this.trainCountdown(train);
    }

    trainTick(train: Train) {
        if (train.countdown == 0 && train.lock == 0) {
            this.resetTrainCountdown(train);
        }
        train.countdown--;
        if (train.countdown === 0) {
            train.currentStore++;
            train.queued--;
            if (!this.isFull(train) && train.queued > 0) {
                this.resetTrainCountdown(train);
            }
        }
    }

    canTrain(train: Train) {
        if (Base.CURRENT_HENCHMEN > 0) {
            if (train.queued + train.currentStore < this.capacity(train)) {
                return true;
            }
        }
        return false;
    }

    //Actions
    queueTrain(train: Train) {
        if (train.id == 0) { //Guards
            if (Base.CURRENT_HENCHMEN > 0) {
                if (!this.training) {
                    if (train.queued + train.currentStore < this.capacity(train)) {
                        this.training = true;
                        Base.CURRENT_HENCHMEN--;
                        train.queued++;
                        this.training = false;
                    }
                }
            }
        }
    }

    collectTrain(train: Train) {
        if (train.currentStore > 0 ) {
            if (!this.collecting) {
                this.collecting = true;
                for (var _i = 0; _i < train.currentStore; _i++) {
                    if (Base.CURRENT_GUARDS < this._inventory.guardCapacity) {
                        Base.CURRENT_GUARDS++;
                        train.currentStore--
                    }
                }
                if (!this.isTraining(train)) {
                    this.resetTrainCountdown(train);
                }
                this.collecting = false;
            }
        }
    }


    percentage(train: Train) {
        if (this.isTraining(train)) {
            return 100 * (1 - (train.countdown / train.lock));
        } else {
            if (this.canTrain(train)) {
                return 0;
            } else {
                if (train.currentStore > 0) {
                    return 100;
                }
            }
        }
    }

















}