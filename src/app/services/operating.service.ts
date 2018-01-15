import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";

@Injectable()
export class OperatingService {

    constructor(public _player: PlayerService) {}

    areAnyUnlocked() {
        //Currently checks for heists or campaign operations.
        return this._player.schemes[6]['level'] > 0 || this._player.schemes[7]['level'] > 0;
    }

    areRoutineOpsUnlocked() {
        //Currently only accounts for Heists.
        return this._player.schemes[6]['level'] > 0;
    }

    areCampaignOpsUnlocked() {
        //Currently only accounts for the 1st one.
        return this._player.schemes[7]['level'] > 0;
    }

    areAscensionOpsUnlocked() {
        return false;
    }
}