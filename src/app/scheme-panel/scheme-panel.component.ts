import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
    selector: 'scheme-panel',
    templateUrl: './scheme-panel.component.html',
    styleUrls: ['./scheme-panel.component.scss'],
})
export class SchemePanelComponent {

    constructor(public _player: PlayerService) {
    }
}