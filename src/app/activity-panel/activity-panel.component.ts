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

    
}
