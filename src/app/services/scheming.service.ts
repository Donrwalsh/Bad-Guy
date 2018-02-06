import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { NumbersService } from "./core/numbers.service";
import { Scheme } from "../models/scheme"
import { Base } from "../base";
import { BaseService } from "../services/base.service";

@Injectable()
export class SchemingService extends Base {

    constructor(public _player: PlayerService,
        public _base: BaseService,
        public _numbers: NumbersService) { super(); }

    //STRUCTURAL VARIABLES
    
    selected = 'scheming'; //Which scheme tree is currently displayed on the scheme panel
    previewScheme: Scheme; //Scheme being previewed
    showPreview: boolean = false; //Controls the appearance of the scheme-panel flyout
    
    //Decide whether to display the "Scheme" button in the flyout
    showSchemeButtonInPreviewScheme() {
        return !this._base.earningSchemePoints && this.canLearn(this.previewScheme) || ((this.previewScheme != Base.CURRENT_SCHEME) && this.canLearn(this.previewScheme));
    }

    //Only supports lair level currently.
    learnLair(scheme : Scheme) {
        return scheme.lairReq[scheme.level] <= this._player.lairLevel;
    }

    canLearn(scheme: Scheme) {
        return this.learnLair(scheme);
    }

    //ACTIONS

    //Open the flyout and display preview scheme details.
    schemePreview(id) {
        this.previewScheme = Base.SCHEMES[id];
        this.showPreview = true;
    }

    //Clicking "Scheme" assigns the previewScheme as the currentScheme
    startSchemingPreview() {
        if (this.canLearn(this.previewScheme)) {
            Base.CURRENT_SCHEME = this.previewScheme;
            Base.EARNING_SCHEME_POINTS = true;
        }
    }

    //Clicking the currentScheme in the header assigns the currentScheme as the previewScheme
    switchToCurrentSchemePreview() {
        if (this._base.earningSchemePoints) {
            this.selected = Base.CURRENT_SCHEME.tree;
            this.previewScheme = Base.CURRENT_SCHEME;
            this.showPreview = true;
        }
    }

    //LOOP GETTERS
    get schemePointsHatchedThisTick() {
        var hatched = 0;
        hatched += this._numbers.quickThinkingNumbers();
        return hatched;
    }

    get schemePointsHatchedThisSecond() {
        var hatched = 1;
        hatched += this._numbers.mastermindNumbers();
        return hatched;
    }

    get schemePointsHatchedThisMinute() {
        var hatched = 0;
        hatched += this._numbers.coldLogicNumbers();
        return hatched;
    }

    //All scheme points earned should route through this function.
    earnSchemePoints(num) {
        Base.SCHEMES[Base.CURRENT_SCHEME.ref].exp += num;
        if (Base.CURRENT_SCHEME.exp >= Base.CURRENT_SCHEME.currentExpTarget){
            Base.SCHEMES[Base.CURRENT_SCHEME.ref]['level']++;
            Base.SCHEMES[Base.CURRENT_SCHEME.ref]['exp'] = 0;
            Base.EARNING_SCHEME_POINTS = false;
        }
    }

}