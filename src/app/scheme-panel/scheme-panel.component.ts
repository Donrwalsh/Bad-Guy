import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { DataService } from '../data.service';

@Component({
    selector: 'scheme-panel',
    templateUrl: './scheme-panel.component.html',
    styleUrls: ['./scheme-panel.component.scss'],
})
export class SchemePanelComponent {

    schemes;

    constructor(public _player: PlayerService,
        public _data: DataService) {
        this._data.getSchemes()
            .subscribe(res => this.schemes = res);
    }

    selected = 'schemes';
}

