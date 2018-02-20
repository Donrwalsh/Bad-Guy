import { Injectable } from "@angular/core";
import { Operation } from '../models/operation';
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class OperatingService extends BaseNum {

    constructor() {
        super();
    }

    operations; //Name arrays, pulled in by app.component.ts
    operatingNow = false; //operate action lockout
    operationResult = false; //operate action lockout part 2 (will not fire if fade doesn't complete)
    previewOperation: Operation; //Storage for active preview operation
    showPreview = false; //handler for whether to show the flyout
    operateReadout = { //Used to store data on result
        result: '',
        lost: 0,
        earned: 0,
        notoriety: 0
    };

    //Generate an operation
    operationSpawn(operation: Operation) {
        var rarity = this.rollOperationRarity(operation);
        operation.rarity = rarity;
        operation.cost01 = this.rollOperationCost01(rarity, operation.type);
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

    //Building blocks and routine logic
    isUnlocked(operation: Operation) {
        if (operation.type == "heist") {
            return this.heistUnlocked(operation.id);
        }
        if (operation.type == "shady-business-deal") {
            return this.shadyBusinessDealsUnlocked(operation.id);
        }
    }

    rollOperationCost01(rarity, type) {
        switch (type) {
            case "heist": {  //Henchmen
                var cost = this.heistCost(rarity);
                break;
            }
            case "shady-business-deal": {//Cash
                var cost = this.shadyBusinessDealCost(rarity);
                break;
            }
        }
        return cost;
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
            case "heist": { countdown = this.heistCountdown(); break; }
            case "shady-business-deal": { countdown = this.shadyBusinessDealCountdown(); break; }
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

    realSuccessRate(resource01, target, rarity, type) {
        var base = this.operationSuccessRate(rarity, type);
        return (base / target) * resource01;
    }

    operationRiskRate(rarity, type) {
        switch (type) {
            case "heist": { var array = [.3, .35, .4, .45, .5]; break; }
            case "shady-business-deal": { var array = [.25, .275, .3, .325, .35]; break; }
        }
        return array[rarity] * this.communicationsMultiplier();
    }

    //Reset Methods for after an Operation is complete
    resetCountdown(operation: Operation) {
        operation.countdown = this.operationCountdown(operation.type);
        operation.lock = this.operationCountdown(operation.type);
    }

    //Methods for the template; Display Methods
    showRisk(operation: Operation) {
        return Math.floor(operation.risk * 10000) / 100;
    }

    showAnOperationName(operation: Operation) {
        var tiers = ['Tier0', 'Tier1', 'Tier2', 'Tier3', 'Tier4'];
        var id: number;
        switch (operation.type) {
            case "heist": { id = 0; break; }
            case "shady-business-deal": { id = 1; break; }
        }
        return this.operations[id][tiers[operation.rarity]][operation.name];
    }

    showOperationCost(operation: Operation) {
        var array: Array<string>;
        switch (operation.type) {
            case "heist": { array = ['user']; break; }
            case "shady-business-deal": { array = ['money']; break; }
        }
        return array;
    }

    //Template Logic Handlers
    areAnyUnlocked() {
        return this.areHeistsUnlocked() || this.areShadyBusinessDealsUnlocked();
    }

    areHeistsUnlocked() {
        return this.heistUnlocked(0);
    }

    areShadyBusinessDealsUnlocked() {
        return this.shadyBusinessDealsUnlocked(5);
    }

    percentage(operation: Operation) {
        return 100 * (1 - (operation.countdown / operation.lock))
    }

    //Tick function for Primary Loop
    operateTick(operation: Operation) {
        if (this.isUnlocked(operation)) {
            if (operation.lock === 0 && operation.countdown === 0) {
                this.operationSpawn(operation);
            }
            //If the operation is available, recheck certain values that may have changed:
            if (operation.available) {
                operation.risk = this.operationRiskRate(operation.rarity, operation.type);
            } else {
                operation.countdown--;
                if (operation.countdown === 0) {
                    this.operationSpawn(operation);
                }
            }
        }
    }

    //Actions
    operate(resource01, operation: Operation) {
        if (!this.operatingNow) {
            var lost = 0;
            switch (operation.type) {
                case "heist": {
                    if (resource01 > 0) {
                        setTimeout(() => { if (this.operatingNow) { this.operationResult = true } }, 1000);
                        this.operatingNow = true;
                        this.operateReadout = { result: '', lost: 0, earned: 0, notoriety: 0 };
                        var roll = Math.random() <= this.realSuccessRate(resource01, this.previewOperation.cost01, this.previewOperation.rarity, this.previewOperation.type)
                        this.operateReadout['result'] = roll ? 'success!' : 'failure.';
                        this.operateReadout['notoriety'] = .1 * (this.previewOperation.rarity+1);
                        if (roll) {
                            var heistDice = [2, 4, 6, 8, 10]
                            var earned = 0;
                            for (var _i = 0; _i < resource01; _i++) {
                                earned += Math.floor(Math.random() * heistDice[operation.rarity]) + 1
                            }
                            this.operateReadout['earned'] = earned;
                            for (var _i = 0; _i < resource01; _i++) {
                                lost += Math.random() <= this.previewOperation['risk'] ? 1 : 0;
                            }
                        } else {
                            lost = resource01;
                        }
                        this.operateReadout['lost'] = lost;
                    }
                    break;
                }
                case "shady-business-deal": {
                    if (resource01 > 0) {
                        setTimeout(() => { if (this.operatingNow) { this.operationResult = true } }, 1000);
                        this.operatingNow = true;
                        this.operateReadout = { result: '', lost: 0, earned: 0, notoriety: 0 };
                        var roll = Math.random() <= this.realSuccessRate(resource01, this.previewOperation.cost01, this.previewOperation.rarity, this.previewOperation.type)
                        this.operateReadout['result'] = roll ? 'success!' : 'failure.';
                        this.operateReadout['notoriety'] = .1 * (this.previewOperation.rarity + 1);
                        if (roll) {
                            this.operateReadout['earned'] = operation.cost01 / 10;
                            for (var _i = 0; _i < resource01; _i++) {
                                lost += Math.random() <= this.previewOperation['risk'] ? 1 : 0;
                            }
                        } else {
                            lost = resource01;
                        }
                        this.operateReadout['lost'] = lost;
                    }
                    break;
                }
            }
        }
    }

    //Complete the operate action.
    closeCompleteOperation() {
        if (this.operatingNow) {
            switch (this.previewOperation.type) {
                case "heist": {
                    Base.CASH += this.operateReadout['earned'];
                    Base.CURRENT_HENCHMEN -= this.operateReadout['lost'];
                    this.notorietyAdd(this.operateReadout['notoriety'])
                    break;
                }
                case "shady-business-deal": {
                    Base.PASSIVE_CASH[this.previewOperation.rarity] += this.operateReadout['earned'];
                    console.log(Base.CASH + " -= " + this.operateReadout['lost']);
                    Base.CASH -= this.operateReadout['lost'];
                    break;
                }
            }
            this.showPreview = false;
            BaseNum.OPERATIONS[this.previewOperation.id] = new Operation(this.previewOperation.id, -1, -1, -1, false, 0, 0)
            this.resetCountdown(BaseNum.OPERATIONS[this.previewOperation.id])
            this.operationResult = false;
            this.operatingNow = false;
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

    getFaColorByRarity(rarity) {
        if (rarity == 0) { return 'black' }
        if (rarity == 1) { return 'green' }
        if (rarity == 2) { return 'blue' }
        if (rarity == 3) { return 'purple' }
        if (rarity == 4) { return 'orange' }
    }

}