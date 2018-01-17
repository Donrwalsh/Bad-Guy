import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { NumbersService } from "./core/numbers.service";

@Injectable()
export class OperatingService {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService) { }

    operations;

    areAnyUnlocked() {
        //Currently checks for heists or campaign operations.
        return this._player.schemes[6]['level'] > 0 || this._player.schemes[7]['level'] > 0;
    }

    areRoutineOpsUnlocked() {

        //Currently only accounts for Heists.
        return this._player.schemes[6]['level'] > 0;
    }

    areCampaignOpsUnlocked() {
        //Currently only accounts for the 1st one.
        return this._player.schemes[7]['level'] > 0;
    }

    areAscensionOpsUnlocked() {
        return false;
    }

    getRoutineOperationCountdownById(id) {
        if (id == 0) { //Hesits
            var rate = 1800;
            rate -= this._numbers.heistRechargeRate()
            return rate;
        }
    }

    isUnlockedById(id) {
        if (id >= 0 && id <= 4) return this._numbers.heistUnlocked(id);
    }



    getFaColorById(id) {
        if (this._player.operating[id]['available']) {
            var rarity = this._player.operating[id]['rarity'];
            return this.getFaColorByRarity(rarity);
        } else {
            return 'white';
        }
    }

    getFaColorByRarity(rarity) {
        if (rarity == 0) { return 'black' }
        if (rarity == 1) { return 'green' }
        if (rarity == 2) { return 'blue' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
    }

    previewOperation;
    showPreview = false;

    operationPreview(id) {
        if (this._player.operating[id]['available']) {
            if (this._player.operating[id] == this.previewOperation) {
                this.showPreview = false;
                this.previewOperation = [];
            } else {
                this.previewOperation = this._player.operating[id];
                this.showPreview = true;
            }

        }



        //this.previewSchemeLevel = this.getSchemeCurrentLevel(id) + 1;

    }

    getHeistHenchmenCost(rarity) {
        var multiplier;
        if (rarity == 0) { multiplier = 5 }
        if (rarity == 1) { multiplier = 10 }
        if (rarity == 2) { multiplier = 20 }
        if (rarity == 3) { multiplier = 50 }
        if (rarity == 4) { multiplier = 100 }
        return Math.ceil(Math.random() * multiplier)
    }

    getHeistCashOutput(rarity, henchmen) {
        var multiplier;
        if (rarity == 0) { multiplier = 1 }
        if (rarity == 1) { multiplier = 1.2 }
        if (rarity == 2) { multiplier = 1.5 }
        if (rarity == 3) { multiplier = 1.7 }
        if (rarity == 4) { multiplier = 2 }
        return Math.floor(henchmen * multiplier)
    }

    getHeistSuccessRate(rarity) {
        var rate;
        if (rarity == 0) { rate = .9 }
        if (rarity == 1) { rate = .8 }
        if (rarity == 2) { rate = .7 }
        if (rarity == 3) { rate = .6 }
        if (rarity == 4) { rate = .5 }
        return rate;
    }

    getHeistRiskRate(rarity) {
        var rate;
        if (rarity == 0) { rate = .15 }
        if (rarity == 1) { rate = .2 }
        if (rarity == 2) { rate = .25 }
        if (rarity == 3) { rate = .3 }
        if (rarity == 4) { rate = .35 }
        var multiplier = 1;
        for (var i = 0; i < this._player.schemes[8]['level']; i++) {
            multiplier -= .05;
        }
        return rate * multiplier;
    }

    previewOperationRiskDisplay() {
        return Math.floor(this.previewOperation['risk'] * 10000) / 100;
    }

    getHeistNotoriety(rarity) {
        return Math.floor((rarity * .1) * 100) / 100;
    }

    tickById(id) {
        if (this.isUnlockedById(id)) {
            //If lock and countdown are both 0, the operation slot has been unlocked since the last tick.
            if (this._player.operating[id]['lock'] == 0 && this._player.operating[id]['countdown'] == 0) {
                this.operationSpawn(id);
            }
            //If the operation is available, recheck certain values that may have changed:
            if (this._player.operating[id]['available']) {
                this._player.operating[id]['risk'] = this.getHeistRiskRate(this._player.operating[id]['rarity']);
            }
        }


    }

    get heistCountdown() {
        //Default is 3 minutes
        return 1800;
    }

    pickAHeistName(rarity) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4']
        var cap = this.operations[0][tiers[rarity]].length;
        return this.operations[0][tiers[rarity]][Math.floor(Math.random() * cap)];
    }

    operationSpawn(id) {
        if (id >= 0 && id <= 4) {//Heists
            var rarity = this.rollHeistRarity();
            var henchmen = this.getHeistHenchmenCost(rarity);
            this._player.operating[id]['name'] = this.pickAHeistName(rarity);
            this._player.operating[id]['rarity'] = rarity;
            this._player.operating[id]['henchmen'] = henchmen;
            this._player.operating[id]['reward'] = this.getHeistCashOutput(rarity, henchmen);
            this._player.operating[id]['success'] = this.getHeistSuccessRate(rarity);
            this._player.operating[id]['risk'] = this.getHeistRiskRate(rarity);
            this._player.operating[id]['notoriety'] = this.getHeistNotoriety(rarity);
            this._player.operating[id]['available'] = true;
            //Reset the countdown in case it was 0.
            this._player.operating[id]['lock'] = this.heistCountdown;

        }
    }

    get heistRarityChances() {
        return this._numbers.heistRarityChancesArray;
    }

    get canPreviewBeOperated() {
        return this._player.currentHenchmen < this.previewOperation['henchmen'];
    }

    //Heists specifically
    rollHeistRarity() {
        var roll = Math.random();
        var heistRarityChances = this._numbers.heistRarityChancesArray();
        if (roll <= heistRarityChances[0]) { return 0 }
        if (roll >= heistRarityChances[0] && roll <= heistRarityChances[1]) { return 1 }
        if (roll >= heistRarityChances[1] && roll <= heistRarityChances[2]) { return 2 }
        if (roll >= heistRarityChances[2] && roll <= heistRarityChances[3]) { return 3 }
        if (roll >= heistRarityChances[3] && roll <= heistRarityChances[4]) { return 4 }
    }

}