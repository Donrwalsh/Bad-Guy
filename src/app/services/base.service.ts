import { Injectable } from "@angular/core";
import { Base } from '../base';
import { BaseNum } from '../base-num';

@Injectable()
export class BaseService extends BaseNum {

    //Serving up Base variables for templates is all this service does.

    constructor() {
        super();
    }

    //Base
    get earningSchemePoints() {
        return Base.EARNING_SCHEME_POINTS;
    }

    get initialLoadSchemes() {
        return Base.INITIAL_LOAD_SCHEMES;
    }

    get schemes() {
        return Base.SCHEMES;
    }

    get currentScheme() {
        return Base.CURRENT_SCHEME;
    }

    get currentHenchmen() {
        return Base.CURRENT_HENCHMEN;
    }
    
    get currentLairHP() {
        return Base.CURRENT_LAIR_HP;
    }

    get currentGuards() {
        return Base.CURRENT_GUARDS;
    }

    //BaseNum
    get recruits() {
        return BaseNum.RECRUITS;
    }

    get trains() {
        return BaseNum.TRAINS;
    }

    get operations() {
        return BaseNum.OPERATIONS;
    }

    get initialLoadRecruits() {
        return Base.INITIAL_LOAD_RECRUITS;
    }

    get lairMaxHP() {
        return this.LAIR_HP_MAX;
    }

    get heistsUnlocked() {
        return this.heistUnlocked(0);
    }

}