import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { SchemingService } from '../services/scheming.service';
import { InventoryService } from '../services/inventory.service';
import { HeroesService } from '../services/heroes.service';

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
})
export class HeaderComponent {

    constructor(public _player: PlayerService,
        public _heroes: HeroesService,
        public _scheming: SchemingService,
        public _inventory: InventoryService) {
    }

    notorietyRotationStyle() {
        var degrees = this._player.notoriety*180;
        return {'transform': 'rotate(-' + degrees + 'deg)'}
    }

    schemeStyle() {
        return {'cursor': this._scheming.earningSchemePoints ? 'pointer' : 'default'}
    }

    schemeProgressBarStyle() {
        return {'width': this._scheming.currentSchemePercentage + '%'}
    }

    notorietyGaugeStyle(id) {
        if (id == 0) {
            console.log('rotate(-' + this._heroes.notorietyToDegrees(id) + 'deg)')
            return {
                'transform' : 'none'
            }
        }
    }

}