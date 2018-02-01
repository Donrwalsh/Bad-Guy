import { Component } from '@angular/core';
import { PlayerService } from '../services/core/player.service';
import { RecruitingService } from '../services/recruiting.service';
import { TrainingService } from '../services/training.service';
import { InventoryService } from '../services/inventory.service';
import { OperatingService } from '../services/operating.service';

@Component({
    selector: 'activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.scss', '../app.component.scss'],
})
export class ActivityPanelComponent {

    constructor(public _player: PlayerService,
        public _recruiting: RecruitingService,
        public _inventory: InventoryService,
        public _operating: OperatingService,
        public _training: TrainingService) {
    }

    containerClass(id, type) {
        return {
            'recruiting-container': type == "recruiting",
            'training-container': type == "training",
            'help-wanted-container': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-container' : type == "training" && id == 0,
            'heist-recharge-container' : type == "operating" && id <= 4 && id >= 0
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
            'width': type == 'recruiting' ? this._recruiting.getPercentageById(id) + '%' : this._training.getPercentageById(id) + '%' 
        }
    }

    displayClass(id, type) {
        return {
            'recruiting-display': type == "recruiting",
            'training-display': type == "training",
            'help-wanted-display': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-display' : type == "training" && id == 0
        }
    }

    addToQueueIconStyle(id) {
        return {
            'visibility': this._training.canTrainById(id) ? 'initial' : 'hidden',
            'cursor': this._training.canTrainById(id) ? 'pointer' : 'default'
        }
    }

    collectingIconStyle(id, type) {
        if (type == "training") {
            return {'visibility': this._training.isTrainingById(0) ? 'initial' : 'hidden' }
        } else {
            return {'visibility': this._recruiting.isRecruitingById(0) ? 'initial' : 'hidden' }
        }
        
            
    }

    containerStyle(id, type) {
        if (type == "training") {
            return { 'cursor': this._player.training[id]['currentStore'] > 0 ? 'pointer' : 'default'}
        } else {
            return { 'cursor': this._player.recruiting[id]['currentStore'] > 0 ? 'pointer' : 'default'}
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
                'display': this._player.training[id]['currentStore'] > 0 ? 'inline-block' : 'none' 
            }
        } else {
            return {
                'display': this._player.recruiting[id]['currentStore'] > 0 ? 'inline-block' : 'none' 
            }
        }
    }

    hideIfOperating() {
        return {'visibility': this._operating.operatingNow ? 'hidden' : 'initial'}
    }

    operateButtonInPreviewStyle() {
        return {
            'color': !this._operating.canPreviewBeOperated ? 'red' : this._operating.getFaColorByRarity(this._operating.previewOperation['rarity']),
            'cursor': !this._operating.canPreviewBeOperated ? 'initial' : 'pointer'
        }
    }

    operationIconClass(id) {
        var object = {}
        if (!this._operating.isUnlockedById(id)) {
            return {'fa-lock': true};
        }
        if (this._player.operating[id]['available'] && this._player.operating[id] == this._operating.previewOperation) {
            if (id >= 0 && id < 5) {
                return {'fa-usd': true, 'faa-tada' : true, 'faa-slow' : true, 'animated' : true }    
            } else if (id > 4 && id < 10) {
                return {'fa-suitcase': true, 'faa-tada' : true, 'faa-slow' : true, 'animated' : true }    
            }
            
        }
        if (!this._player.operating[id]['available']) {
            if (id > 0 && id < 5) {
                return {'fa-usd': true, 'faa-slow' : true, 'faa-flash' : true, 'animated' : true}
            } else if (id > 4 && id < 10) {
                return {'fa-suitcase': true, 'faa-slow' : true, 'faa-flash' : true, 'animated' : true}
            }
            
        }
        if ( id >= 0 && id < 5) {
            return {'fa-usd': true }
        } else if (id > 4 && id < 10) {
            return {'fa-suitcase': true}
        }
    
        
    }

    previewOperationFa() {
        if (this._operating.previewOperationId >= 0 && this._operating.previewOperationId <= 4) {
            return {'fa-usd': true}
        } else if (this._operating.previewOperationId >= 5 && this._operating.previewOperationId <= 9) {
            return {'fa-suitcase': true}
        }
    }
    
}
