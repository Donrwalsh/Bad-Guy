import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";

@Injectable()
export class OperatingService {

    constructor(public _player: PlayerService) { }

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

    isUnlockedById(id) {
        if (id == 0) return this.isHeistUnlockedById(id);
    }

    isHeistUnlockedById(id) {
        if (id == 0) return this._player.schemes[6]['level'] > 0;
    }

    get heistRarityChances() {
        var chances = [.5, .7, .85, .95, 1];
        return chances;
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
        if (rarity == 1) { return 'blue' }
        if (rarity == 2) { return 'green' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
    }

    previewOperation;
    showPreview = false;

    operationPreview(id) {
        console.log("called");
        console.log(this._player.operating);
        if (this._player.operating[id]['available']) {
            console.log("Pass");
            this.previewOperation = this._player.operating[id];
            this.showPreview = true;
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
            multiplier-= .05;
        }
        return rate*multiplier;
    }

    previewOperationRiskDisplay() {
        return Math.floor(this.previewOperation['risk']*10000)/100;
    }

    getHeistNotoriety(rarity) {
        return Math.floor((rarity * .1)*100)/100;
    }

    tickById(id) {
        if (this.isUnlockedById(id)) {
            //If lock and countdown are both 0, the operation slot has been unlocked since the last tick.
            if (this._player.operating[id]['lock'] == 0 && this._player.operating[id]['countdown'] == 0) {
                this.operationSpawn(id);
                console.log("Tier: " + this._player.operating[id]['rarity'] + ", Henchmen: " + this._player.operating[id]['henchmen']);
                console.log("Cash Output: " + this.getHeistCashOutput(this._player.operating[id]['rarity'], this._player.operating[id]['henchmen']))
            }
            //If the operation is available, recheck certain values that may have changed:
            if(this._player.operating[id]['available']) {
                this._player.operating[id]['risk'] = this.getHeistRiskRate(this._player.operating[id]['rarity']);
            }
        }


    }

    get heistCountdown() {
        //Default is 3 minutes
        return 1800;
    }

    operationSpawn(id) {
        if (id >= 0 && id <= 4) {//Heists
            var rarity = this.rollHeistRarity();
            var henchmen = this.getHeistHenchmenCost(rarity);
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

    //Heists specifically
    rollHeistRarity() {
        var roll = Math.random();
        if (roll <= this.heistRarityChances[0]) { return 0 }
        if (roll >= this.heistRarityChances[0] && roll <= this.heistRarityChances[1]) { return 1 }
        if (roll >= this.heistRarityChances[1] && roll <= this.heistRarityChances[2]) { return 2 }
        if (roll >= this.heistRarityChances[2] && roll <= this.heistRarityChances[3]) { return 3 }
        if (roll >= this.heistRarityChances[3] && roll <= this.heistRarityChances[4]) { return 4 }
    }

}