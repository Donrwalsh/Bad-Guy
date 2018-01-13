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

    addToQueueIconStyle(id) {
        return {
            'visibility': this._training.canTrainById(id) ? 'initial' : 'hidden',
            'cursor': this._training.canTrainById(id) ? 'pointer' : 'default'
        }
    }

    trainingContainerStyle(id) {
        return {
            'cursor': this._player.training[id]['currentStore'] > 0 ? 'pointer' : 'default'
        }
    }

    trainingProgressBarStyle(id) {
        return { 
            'width': this._training.getPercentageById(id) + '%' 
        }
    }

    trainingCollectionIcon(id) {
        return {
            'faa-tada': !this._inventory.isHenchmenUpgradeFullById(id),
            'faa-horizontal': this._inventory.isHenchmenUpgradeFullById(id),
            'fa-shield': id == 0
        }
    }


}
