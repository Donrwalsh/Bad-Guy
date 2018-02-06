import { Component } from '@angular/core';
import { PlayerService } from '../services/core/player.service';
import { SchemingService } from '../services/scheming.service';
import { InventoryService } from '../services/inventory.service';
import { HeroesService } from '../services/heroes.service';
import { Base } from '../base';

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
    styleUrls: ['../app.component.scss'],
})
export class HeaderComponent extends Base {

    constructor(public _player: PlayerService,
        public _heroes: HeroesService,
        public _scheming: SchemingService,
        public _inventory: InventoryService) {
            super();
    }

    notorietyRotationStyle() {
        var degrees = this._player.notoriety*1.8;
        return {'transform': 'rotate(' + degrees + 'deg)'}
    }

    schemeStyle() {
        return {'cursor': this.earningSchemePoints() ? 'pointer' : 'default'}
    }

    schemeProgressBarStyle() {
        return {'width': this._player.currentScheme.percentage + '%'}
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