import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { Base } from '../../base';

@Injectable()
export class NumbersService extends Base {

    constructor ( public _player: PlayerService) {
        super();
    }


    //04: Guard Duty
    guardDutyTrainRate() {
        var reduce = 0;
        for (var _i = 0; _i < Base.SCHEMES[4]['level']; _i++) {
            if (_i == 1) { reduce += 60}
            if (_i == 3) { reduce += 60}
        }
        return reduce;
    }

    guardDutyUnlocked() {
        return Base.SCHEMES[4]['level'] > 0;
    }

    guardDutyCapacity() {
        var capacity = 0;
        for (var _i = 0; _i < Base.SCHEMES[4]['level']; _i++) {
            if (_i == 2) { capacity += 9; }
        }

        return capacity;
    }

    
    //06: Heists
    heistUnlocked(id) {
        if (id == 0) return Base.SCHEMES[6]['level'] > 0;
        if (id == 1) return Base.SCHEMES[6]['level'] > 3;
    }

    heistRarityChancesArray() {
        if (Base.SCHEMES[6]['level'] == 1) { 
            return [1, 1.1, 1.1, 1.1, 1.1] 
        }
        else if (Base.SCHEMES[6]['level'] >= 1 && Base.SCHEMES[6]['level'] <= 2) {
            return [.9, 1, 1.1, 1.1, 1.1]
        } else if (Base.SCHEMES[6]['level'] >= 3 && Base.SCHEMES[6]['level'] <= 5) {
            return [.8, .95, 1, 1.1, 1.1]
        }
    }

    heistRechargeRate() {
        var reduce = 0;
        for (var _i = 0; _i < Base.SCHEMES[6]['level']; _i++) {
            if (_i == 2) { reduce += 150}
        }
        return reduce;
    }

    //07: Shady Business Deals
    shadyBusinessDealUnlocked(id) {
        if (id == 5) return Base.SCHEMES[7]['level'] > 0;
        if (id == 6) return Base.SCHEMES[7]['level'] > 3;
    }

    shadyBusinessDealRarityChancesArray() {
        if (Base.SCHEMES[7]['level'] == 1) { 
            return [1, 1.1, 1.1, 1.1, 1.1] 
        }
        else if (Base.SCHEMES[7]['level'] >= 1 && Base.SCHEMES[7]['level'] <= 2) {
            return [.9, 1, 1.1, 1.1, 1.1]
        } else if (Base.SCHEMES[7]['level'] >= 3 && Base.SCHEMES[7]['level'] <= 5) {
            return [.8, .95, 1, 1.1, 1.1]
        }
    }


}