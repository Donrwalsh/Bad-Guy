import { Injectable } from "@angular/core";
import { Scheme } from "../models/scheme"
import { Base } from "../base";
import { BaseNum } from "../base-num";
import { BaseService } from "../services/base.service";

@Injectable()
export class SchemingService extends BaseNum {

    constructor(public _base: BaseService) 
        { super(); }

    //STRUCTURAL VARIABLES
    
    selected = 'scheming'; //Which scheme tree is currently displayed on the scheme panel
    previewScheme: Scheme; //Scheme being previewed
    showPreview: boolean = false; //Controls the appearance of the scheme-panel flyout
    
    //Decide whether to display the "Scheme" button in the flyout
    showSchemeButtonInPreviewScheme() {
        return !Base.EARNING_SCHEME_POINTS && this.canLearn(this.previewScheme) 
        || 
        ((this.previewScheme != Base.CURRENT_SCHEME) && this.canLearn(this.previewScheme));
    }

    //canLearn() is the aggregate. It consults multiple methods to determine learnability.
    canLearn(scheme: Scheme) {
        return this.learnLair(scheme) && this.learnCash(scheme);
    }

    learnLair(scheme : Scheme) {
        return scheme.lairReq[scheme.level] <= this.LAIR_LEVEL;
    }

    learnCash(scheme: Scheme) {
        return scheme.cash == scheme.currentCashCost;
    }

    //ACTIONS

    //Open the flyout and display preview scheme details.
    schemePreview(scheme : Scheme) {
        this.previewScheme = scheme;
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
        hatched += this.quickThinkingNumbers; // T0 Scheme
        return hatched;
    }

    get schemePointsHatchedThisSecond() {
        var hatched = 1;
        hatched += this.mastermindNumbers; // T0 Scheme
        return hatched;
    }

    get schemePointsHatchedThisMinute() {
        var hatched = 0;
        hatched += this.coldLogicNumbers; // T0 Scheme
        return hatched;
    }

    //All scheme points earned should route through this function.
    earnSchemePoints(num) {
        Base.CURRENT_SCHEME.exp += num;
        if (Base.CURRENT_SCHEME.exp >= Base.CURRENT_SCHEME.currentExpTarget){
            Base.CURRENT_SCHEME.level++;
            Base.CURRENT_SCHEME.exp = 0;
            Base.EARNING_SCHEME_POINTS = false;
        }
    }

}