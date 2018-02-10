import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { Operation } from '../models/operation';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class OperatingService extends BaseNum {

    constructor(public _player: PlayerService) {
        super();
    }

    //Generate an operation
    operationSpawn(operation: Operation) {
        switch (operation.type) {
            case "heist": {
                var rarity = this.rollHeistRarity();

                operation.rarity = rarity;
                operation.henchmenCost = this.getHeistHenchmenCost(rarity);
                operation.available = true;
                operation.name = this.pickAHeistName(rarity);
                operation.lock = this.heistCountdown;
                operation.success = this.getHeistSuccessRate(rarity);
            }
        }

        /*
                if (id >= 0 && id <= 4) {//Heists
                    this._player.operating[id]['reward'] = this.getHeistCashOutput(rarity, henchmen);
                    this._player.operating[id]['success'] = this.getHeistSuccessRate(rarity);
                    this._player.operating[id]['risk'] = this.getHeistRiskRate(rarity);
                    this._player.operating[id]['notoriety'] = this.getHeistNotoriety(rarity);
                    this._player.operating[id]['available'] = true;
                    //Reset the countdown in case it was 0.
                    this._player.operating[id]['lock'] = this.heistCountdown;
                } else if (id >= 5 && id <= 9) {//Shady Business Deals
                    var rarity = this.rollShadyBusinessDealRarity();
                    var henchmen = this.getDealHenchmenCost(rarity);
        
                    this._player.operating[id]['rarity'] = rarity;
                    this._player.operating[id]['henchmen'] = henchmen;
                }
                */
    }

    //Heist Generation
    getHeistHenchmenCost(rarity) {
        var base = [0, 10, 100, 1000, 10000]
        var multiplier = [10, 100, 1000, 10000, 1000000]
        return base[rarity] + Math.ceil(Math.random() * multiplier[rarity])
    }

    rollHeistRarity() {
        var roll = Math.random();
        var heistRarityChances = this.heistRarityChancesArray();
        var result = heistRarityChances.filter(function (x) {
            return x < roll;
        })
        return result.length;
    }

    getHeistRiskRate(rarity) {
        return [.3, .35, .4, .45, .5][rarity]*this.communicationsMultiplier();
    }

    getHeistSuccessRate(rarity) {
        return [.85, .825, .8, .775, .75][rarity];
    }

    pickAHeistName(rarity) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4'];
        var cap = this.operations[0][tiers[rarity]].length;
        return Math.floor(Math.random() * cap);
    }

    showAHeistName(heist: Operation) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4'];
        return this.operations[0][tiers[heist.rarity]][heist.name];
    }

    get heistCountdown() {
        //Default is 2 minutes
        return 1200;
    }

    realSuccessRate(henchmen, target, rarity, type) {
        switch (type) {
            case "heist": {
                var base = this.getHeistSuccessRate(rarity);
            }
        }
        return (base / target) * henchmen;
    }

    
    //Template Logic Handlers
    areAnyUnlocked() {
        return this.areHeistsUnlocked() || this.areShadyBusinessDealsUnlocked();
    }

    areHeistsUnlocked() {
        for (var _i = 0; _i < 5; _i++) {
            if (this.isUnlocked(BaseNum.OPERATIONS[_i])) {
                return true;
            }
        }
        return false;
    }

    areShadyBusinessDealsUnlocked() {
        for (var _i = 5; _i < 10; _i++) {
            if (this.isUnlocked(BaseNum.OPERATIONS[_i])) {
                return true;
            }
        }
        return false;
    }

    //Operation methods
    isUnlocked(operation: Operation) {
        if (operation.type == "heist") {
            return this.heistUnlocked(operation.id);
        }
        if (operation.type == "shady-business-deal") {
            return this.shadyBusinessDealUnlocked(operation.id);
        }
    }

    operationPreview(operation: Operation) {
        console.log(operation);
        if (operation.available && this.isUnlocked(operation)) {
            if (operation == this.previewOperation) {
                this.showPreview = false;
                this.previewOperation = undefined;
            } else {
                this.previewOperation = operation;
                this.showPreview = true;
            }
        }
    }

    nodeColor(operation: Operation) {
        if (this.isUnlocked(operation) && operation.available) {
            return this.FaColor(operation.rarity);
        } else {
            return 'white';
        }
    }

    operateTick(operation: Operation) {
        if (this.isUnlocked(operation)) {
            if (operation.lock === 0 && operation.countdown === 0) {
                console.log("I'm spawning an operation");
                this.operationSpawn(operation);
            }
            //If the operation is available, recheck certain values that may have changed:
            if (operation.available) {
                operation.risk = this.getHeistRiskRate(operation.rarity)
            } else {
                operation.countdown--;
                if (operation.countdown === 0) {
                    this.operationSpawn(operation);
                }
            }
            
        }

    }

    //Display methods

    displayRisk(operation: Operation) {
        return Math.floor(operation.risk * 10000) / 100;
    }








    operations;



    /*
    
    
        areAnyUnlocked() {
            return this.areRoutineOpsUnlocked() || this.areCampaignOpsUnlocked();
        }
    */


    getRoutineOperationCountdownById(id) {
        if (id >= 0 && id <= 4) { //Hesits
            var rate = 600;
            rate -= this.heistRechargeRate()
            return rate;
        }
    }







    getFaColorByRarity(rarity) {
        if (rarity == 0) { return 'black' }
        if (rarity == 1) { return 'green' }
        if (rarity == 2) { return 'blue' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
    }

    previewOperation: Operation;
    showPreview = false;

    resetCountdownById(id) {
        this._player.operating[id]['countdown'] = this.getOperationRechargeById(id);
        this._player.operating[id]['lock'] = this.getOperationRechargeById(id);
    }

    getOperationRechargeById(id) {
        if (id >= 0 && id <= 4) { //Heists
            return this.getRoutineOperationCountdownById(id);
        }
    }

    closeCompleteOperation() {
        this.showPreview = false;
        this._player.operating[this.previewOperation.id] = { name: '', rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 }
        this.resetCountdownById(this.previewOperation.id);
        this.operatingNow = false;
        this.previewOperation = undefined;

    }



    operatingNow = false;
    operateReadout = {
        result: '',
        lost: 0,
        earned: 0,
        notoriety: 0
    };

    operateById(id) {

    }

    operate() {
        if (this.canPreviewBeOperated) {
            this.operateReadout = { result: '', lost: 0, earned: 0, notoriety: 0 };
            this.operatingNow = true;
            var roll = Math.random() <= this.previewOperation['success']
            this.operateReadout['result'] = roll ? 'success!' : 'failure.';
            var lost = 0;
            if (roll) {
                this.operateReadout['earned'] = this.previewOperation['reward'];
                this._player.cash += this.previewOperation['reward'];
                for (var _i = 0; _i < this.previewOperation['henchmen']; _i++) {
                    lost += Math.random() <= this.previewOperation['risk'] ? 1 : 0;
                }
            } else {
                lost = this.previewOperation['henchmen']
            }
            this.operateReadout['lost'] = lost;
            Base.CURRENT_HENCHMEN -= lost;
            this.operateReadout['notoriety'] = this.previewOperation['notoriety'];
            this._player.notoriety += this.operateReadout['notoriety'] * 10;
        }
    }



    getDealHenchmenCost(rarity) {
        var multiplier;
        if (rarity == 0) { multiplier = 10 }
        if (rarity == 1) { multiplier = 20 }
        if (rarity == 2) { multiplier = 50 }
        if (rarity == 3) { multiplier = 100 }
        if (rarity == 4) { multiplier = 200 }
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





    

    getHeistNotoriety(rarity) {
        return Math.floor((rarity * .1) * 100) / 100;
    }

    getPercentageById(id) {
        return 100 * (1 - (this._player.operating[id]['countdown'] / this._player.operating[id]['lock']))
    }









    get heistRarityChances() {
        return this.heistRarityChancesArray;
    }

    get canPreviewBeOperated() {
        return Base.CURRENT_HENCHMEN >= this.previewOperation['henchmen'];
    }

    //Heists specifically


    rollShadyBusinessDealRarity() {
        var roll = Math.random();
        var dealRarityChances = this.shadyBusinessDealRarityChancesArray();
        if (roll >= dealRarityChances[0] && roll <= dealRarityChances[1]) { return 1 }
        if (roll >= dealRarityChances[1] && roll <= dealRarityChances[2]) { return 2 }
        if (roll >= dealRarityChances[2] && roll <= dealRarityChances[3]) { return 3 }
        if (roll >= dealRarityChances[3] && roll <= dealRarityChances[4]) { return 4 }
    }

}