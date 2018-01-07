import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('popOverState', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                opacity: 0
            })),
            transition('show => hide', animate('1200ms ease-out')),
            transition('hide => show', animate('2000ms ease-in'))
        ])
    ]
})
export class HeaderComponent {

    constructor(public _player: PlayerService) {
    }

    showSchemeFlyout = false;

    get stateName() {
        return this.showSchemeFlyout ? 'show' : 'hide'
    }
}