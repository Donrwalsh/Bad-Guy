import { Component } from '@angular/core';
import { RecruitingService } from '../services/recruiting.service';
import { TrainingService } from '../services/training.service';
import { InventoryService } from '../services/inventory.service';
import { OperatingService } from '../services/operating.service';
import { BaseNum } from '../base-num';
import { BaseService } from '../services/base.service';
import { Train } from '../models/train';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'activity-panel',
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate('2000ms', style({ opacity: 1 }))
                ])
            ]
        )
    ],
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.scss', '../app.component.scss']
})
export class ActivityPanelComponent extends BaseNum {

    constructor(public _base: BaseService,
        public _recruiting: RecruitingService,
        public _inventory: InventoryService,
        public _operating: OperatingService,
        public _training: TrainingService) {
        super();
    }


    operateAssign: number = 0;

    get success() {
        return this._operating.realSuccessRate(this.operateAssign, this._operating.previewOperation.cost01, this._operating.previewOperation.rarity, this._operating.previewOperation.type);
    }

    onInputChange(event: any) {
        this.operateAssign = event.value;
    }

    containerClass(id, type) {
        return {
            'recruiting-container': type == "recruiting",
            'training-container': type == "training",
            'help-wanted-container': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-container': type == "training" && id == 0,
            'heist-recharge-container': type == "operating" && id <= 4 && id >= 0
        }
    }

    progressBarClass(id, type) {
        return {
            'progress-bar': true,
            'help-wanted-progress-bar': type == "recruiting" && (id == 0 || id == 1),
            'guard-progress-bar': type == "training" && id == 0
        }
    }

    //This will break if more than 2 types are used.
    styleProgressBar(id, type) {
        return {
            'width': type == 'recruiting' ? this._recruiting.percentage(BaseNum.RECRUITS[id]) + '%' : this._training.percentage(BaseNum.TRAINS[id]) + '%'
        }
    }

    displayClass(id, type) {
        return {
            'recruiting-display': type == "recruiting",
            'training-display': type == "training",
            'help-wanted-display': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-display': type == "training" && id == 0
        }
    }

    addToQueueIconStyle(train: Train) {
        return {
            'visibility': this._training.canTrain(train) ? 'initial' : 'hidden',
            'cursor': this._training.canTrain(train) ? 'pointer' : 'default'
        }
    }

    collectingIconStyle(id, type) {
        if (type == "training") {
            return { 'visibility': this._training.isTraining(BaseNum.TRAINS[id]) ? 'initial' : 'hidden' }
        } else {
            return { 'visibility': this._recruiting.isRecruiting(BaseNum.RECRUITS[id]) ? 'initial' : 'hidden' }
        }


    }

    containerStyle(id, type) {
        if (type == "training") {
            return { 'cursor': BaseNum.TRAINS[id].currentStore > 0 ? 'pointer' : 'default' }
        } else {
            return { 'cursor': BaseNum.RECRUITS[id].currentStore > 0 ? 'pointer' : 'default' }
        }
    }

    collectionIcon(id, type) {
        if (type == "training") {
            return {
                'faa-tada': !this._inventory.isHenchmenUpgradeFullById(id),
                'faa-horizontal': this._inventory.isHenchmenUpgradeFullById(id)
            }
        } else {
            return {
                'faa-tada': !this._inventory.isHenchmenCapacityFull,
                'faa-horizontal': this._inventory.isHenchmenCapacityFull,
            }
        }
    }

    collectionIconStyle(id, type) {
        if (type == "training") {
            return {
                'display': BaseNum.TRAINS[id].currentStore > 0 ? 'inline-block' : 'none'
            }
        } else {
            return {
                'display': BaseNum.RECRUITS[id].currentStore > 0 ? 'inline-block' : 'none'
            }
        }
    }

    hideIfOperating() {
        return { 'visibility': this._operating.operatingNow ? 'hidden' : 'initial' }
    }

    operateButtonInPreviewStyle() {
        return {
            'color': this.operateAssign == 0 ? 'red' : this._operating.getFaColorByRarity(this._operating.previewOperation['rarity']),
            'cursor': this.operateAssign > 0 ? 'initial' : 'pointer'
        }
    }

    operationIconClass(operation) {
        if (!this._operating.isUnlocked(operation)) {
            return { 'fa-lock': true };
        }
        if (operation.available && operation === this._operating.previewOperation) {
            if (operation.type === "heist") {
                return { 'fa-usd': true, 'faa-tada': true, 'faa-slow': true, 'animated': true }
            } else if (operation.type === "shady-business-deal") {
                return { 'fa-suitcase': true, 'faa-tada': true, 'faa-slow': true, 'animated': true }
            }

        }
        if (!operation.available) {
            if (operation.type === "heist") {
                return { 'fa-usd': true, 'faa-slow': true, 'faa-flash': true, 'animated': true }
            } else if (operation.type === "shady-business-deal") {
                return { 'fa-suitcase': true, 'faa-slow': true, 'faa-flash': true, 'animated': true }
            }

        }
        if (operation.type === "heist") {
            return { 'fa-usd': true }
        } else if (operation.type === "shady-business-deal") {
            return { 'fa-suitcase': true }
        }


    }

    previewOperationFa() {
        if (this._operating.previewOperation.id >= 0 && this._operating.previewOperation.id <= 4) {
            return { 'fa-usd': true }
        } else if (this._operating.previewOperation.id >= 5 && this._operating.previewOperation.id <= 9) {
            return { 'fa-suitcase': true }
        }
    }

}
