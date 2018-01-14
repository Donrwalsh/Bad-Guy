import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { RecruitingService } from '../services/recruiting.service';
import { TrainingService } from '../services/training.service';
import { InventoryService } from '../services/inventory.service';

@Component({
    selector: 'activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent {

    constructor(public _player: PlayerService,
        public _recruiting: RecruitingService,
        public _inventory: InventoryService,
        public _training: TrainingService) {
    }

    containerClass(id, type) {
        return {
            'recruitment-container': type == "recruiting",
            'training-container': type == "training",
            'help-wanted-container': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-container' : type == "training" && id == 0
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
            'recruitment-display': type == "recruiting",
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
}
