import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
    selector: 'activity-panel',
    templateUrl: './activity-panel.component.html',
    styleUrls: ['./activity-panel.component.scss'],
})
export class ActivityPanelComponent {

    constructor(public _player: PlayerService) {
    }

    collectingHenchmen: boolean = false;

    collectHelpWanted1() {
        if (this._player.helpWanted[0]['currentStore'] > 0) {
            if (!this.collectingHenchmen) {
                this.collectingHenchmen = true;
                this._player.currentHenchmen += this._player.helpWanted[0]['currentStore'];
                if (this._player.currentHenchmen > this._player.henchmenCapacity) {
                    this._player.helpWanted[0]['currentStore'] = this._player.currentHenchmen - this._player.henchmenCapacity;
                    this._player.currentHenchmen = this._player.henchmenCapacity;
                    if (this._player.helpWanted[0]['full']) {
                        this._player.helpWanted[0]['magicModulo'] = -1;
                    }
                    this._player.helpWanted[0]['full'] = this._player.helpWanted[0]['currentStore'] == this._player.helpWanted[0]['capacity'];
                } else {
                    this._player.helpWanted[0]['currentStore'] = 0;
                    if (this._player.helpWanted[0]['full']) {
                        this._player.helpWanted[0]['magicModulo'] = -1;
                    }
                    this._player.helpWanted[0]['full'] = false;
                    this._player.helpWanted[0]['percentage'] = 0;
                }

                this.collectingHenchmen = false;
            }
        }
    }

    queueingAGuard: boolean = false;

    trainAGuard() {
        if (this._player.currentHenchmen > 0) {
            if (!this.queueingAGuard) {
                if (this._player.training[0]['queued'] + this._player.training[0]['currentStore'] < this._player.guardTrainingCapacity) {
                    this.queueingAGuard = true;
                    this._player.isGuardTrainingHappening = true;
                    this._player.currentHenchmen -= 1;
                    this._player.training[0]['queued'] += 1;
                    this.queueingAGuard = false;
                }
            }
        }
    }

    collectingGuards: boolean = false;

    collectGuards() {
        if (this._player.training[0]['currentStore'] > 0) {
            if (!this.collectingGuards) {
                this.collectingGuards = true;
                this._player.currentGuards += this._player.training[0]['currentStore'];
                if (this._player.currentGuards > this._player.guardCapacity) {
                    this._player.training[0]['currentStore'] = this._player.currentGuards - this._player.guardCapacity;
                    this._player.currentGuards = this._player.guardCapacity;
                    if (this._player.training[0]['full']) {
                        this._player.training[0]['magicModulo'] = -1;
                    }
                    this._player.training[0]['full'] = this._player.training[0]['currentStore'] == this._player.training[0]['capacity'];
                } else {
                    this._player.training[0]['currentStore'] = 0;
                    if (this._player.training[0]['full']) {
                        this._player.training[0]['magicModulo'] = -1;
                    }
                    this._player.training[0]['full'] = false;
                    this._player.training[0]['percentage'] = 0;
                }
                this.collectingGuards = false;
            }

        }
    }
}
