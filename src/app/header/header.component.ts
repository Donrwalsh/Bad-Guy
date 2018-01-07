import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(public _player: PlayerService) {
    }
}