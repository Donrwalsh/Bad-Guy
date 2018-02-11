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

    operatingNow = false; //Lockout, not implemented yet
    operateReadout = { //Used to store data on result
        result: '',
        lost: 0,
        earned: 0,
        notoriety: 0
    };

    //Perform the Operation
    operate(henchmenQueued, operation: Operation) {
        if (henchmenQueued > 0) {
            setTimeout(() => { this.operationResult = true }, 2000);
            this.operatingNow = true;
            this.operateReadout = { result: '', lost: 0, earned: 0, notoriety: 0 };
            var roll = Math.random() <= this.realSuccessRate(henchmenQueued, this.previewOperation.henchmenCost, this.previewOperation.rarity, this.previewOperation.type)
            this.operateReadout['result'] = roll ? 'success!' : 'failure.';
            var lost = 0;
            if (roll) {
                var heistDice = [2, 4, 6, 8, 10]
                var earned = 0;
                for (var _i = 0; _i < henchmenQueued; _i++) {
                    earned += Math.floor(Math.random() * heistDice[operation.rarity]) + 1
                }
                this.operateReadout['earned'] = earned;
                Base.CASH += earned;
                for (var _i = 0; _i < henchmenQueued; _i++) {
                    lost += Math.random() <= this.previewOperation['risk'] ? 1 : 0;
                }
            } else {
                lost = henchmenQueued;
            }
            this.operateReadout['lost'] = lost;
            Base.CURRENT_HENCHMEN -= lost;
        }
    }

    //Generate an operation
    operationSpawn(operation: Operation) {
        switch (operation.type) {
            case "heist": { var rarity = this.rollOperationRarity(operation); break; }
            case "shady-business-deal": { var rarity = this.rollOperationRarity(operation); break; }
        }
        operation.rarity = rarity;
        operation.henchmenCost = this.rollOperationHenchmenCost(rarity, operation.type);
        operation.available = true;
        operation.name = this.pickAnOperationName(rarity, operation.type);
        operation.lock = this.operationCountdown(operation.type);
        operation.success = this.operationSuccessRate(rarity, operation.type)
    }


    //Spawning an Operation Methods:
    rollOperationRarity(operation: Operation) {
        //Filtering the array and returning the length is a quicker way of determining roll quadrant.
        var roll = Math.random();
        switch (operation.type) {
            case "heist": { var rarityChances = this.heistRarityChancesArray(); break; }
            case "shady-business-deal": { var rarityChances = this.shadyBusinessDealRarityChancesArray(); break; }
        }
        var result = rarityChances.filter(function (x) {
            return x < roll;
        })
        return result.length;
    }

    rollOperationHenchmenCost(rarity, type) {
        switch (type) {
            case "heist": {
                var base = [0, 10, 100, 1000, 10000];
                var multiplier = [10, 100, 1000, 10000, 1000000];
                break;
            }
            case "shady-business-deal": {
                var base = [4, 40, 400, 4000, 40000];
                var multiplier = [10, 100, 1000, 10000, 1000000];
                break;
            }
        }
        return base[rarity] + Math.ceil(Math.random() * multiplier[rarity])
    }

    pickAnOperationName(rarity, type) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4'];
        var cap: number;
        switch (type) {
            case "heist": {
                console.log(this.operations[0])
                cap = this.operations[0][tiers[rarity]].length;
                break;
            }
            case "shady-business-deal": {
                cap = this.operations[1][tiers[rarity]].length;
                break;
            }
        }
        console.log(cap);
        return Math.floor(Math.random() * cap);
    }

    operationCountdown(type) {
        var countdown;
        switch (type) {
            case "heist": { countdown = 1200; break; }
            case "shady-business-deals": { countdown = 1200; break; }
        }
        return countdown;
    }

    operationSuccessRate(rarity, type) {
        switch (type) {
            case "heist": { var array = [.85, .825, .8, .775, .75]; break; }
            case "shady-business-deal": { var array = [.95, .9, .85, .8, .75]; break; }
        }
        return array[rarity]
    }

    //Reset Methods for after an Operation is complete
    resetCountdown(operation: Operation) {
        operation.countdown = this.getOperationRecharge(operation)
        operation.lock = this.getOperationRecharge(operation)
    }

    getOperationRecharge(operation: Operation) {
        if (operation.type == "heist") { //Heists
            var rate = 600;
            rate -= this.heistRechargeRate()
            return rate;
        }
    }

    //Methods for the template; Display Methods
    showAnOperationName(operation: Operation) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4'];
        var id: number;
        switch (operation.type) {
            case "heist" : { id = 0; break;}
            case "shady-business-deal" : {id = 1; break;}
        }
        return this.operations[id][tiers[operation.rarity]][operation.name];
    }

    showOperationCost(operation: Operation) {
        var array: Array<string>;
        switch (operation.type) {
            case "heist" : {array = ['user']; break;}
            case "shady-business-deal" : {array = ['user', 'money']; break;}
        }
        return array;
    }






    //Heist Generation




    getHeistRiskRate(rarity) {
        return [.3, .35, .4, .45, .5][rarity] * this.communicationsMultiplier();
    }





    



    realSuccessRate(henchmen, target, rarity, type) {
        var base = this.operationSuccessRate(rarity, type);
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
        this.closeCompleteOperation();
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
                //console.log("I'm spawning an operation");
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

    operationResult = false;



    /*
     
     
        areAnyUnlocked() {
            return this.areRoutineOpsUnlocked() || this.areCampaignOpsUnlocked();
        }
    */









    getFaColorByRarity(rarity) {
        if (rarity == 0) { return 'black' }
        if (rarity == 1) { return 'green' }
        if (rarity == 2) { return 'blue' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
    }

    previewOperation: Operation;
    showPreview = false;





    closeCompleteOperation() {
        if (this.operatingNow) {


            this.showPreview = false;
            BaseNum.OPERATIONS[this.previewOperation.id] = new Operation(this.previewOperation.id, -1, -1, -1, false, 0, 0)
            this.resetCountdown(BaseNum.OPERATIONS[this.previewOperation.id])
            this.operationResult = false;
            this.previewOperation = undefined;
            this.operatingNow = false;
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

    percentage(operation: Operation) {
        return 100 * (1 - (operation.countdown / operation.lock))
    }









    get heistRarityChances() {
        return this.heistRarityChancesArray;
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