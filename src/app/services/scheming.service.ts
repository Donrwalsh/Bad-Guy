import { Injectable } from "@angular/core";
import { PlayerService } from "./core/player.service";
import { NumbersService } from "./core/numbers.service";
import { Scheme } from "../models/scheme"
import { Base } from "../base";

@Injectable()
export class SchemingService extends Base {

    constructor(public _player: PlayerService,
        public _numbers: NumbersService) { super(); }

    //STRUCTURAL VARIABLES
    schemes: Array<Scheme>; //Raw schemes. Provided by app.component.ts
    selected = 'scheming'; //Which scheme tree is currently displayed on the scheme panel
    previewScheme: Scheme; //Scheme being previewed
    showPreview: boolean = false; //Controls the appearance of the scheme-panel flyout
    
    //Decide whether to display the "Scheme" button in the flyout
    showSchemeButtonInPreviewScheme() {
        return !this.earningSchemePoints() && this.previewScheme.canBeLearned || ((this.previewScheme != this._player.currentScheme) && this.previewScheme.canBeLearned);
    }

    //ACTIONS

    //Open the flyout and display preview scheme details.
    schemePreview(id) {
        this.previewScheme = this.schemes[id];
        this.showPreview = true;
    }

    //Clicking "Scheme" assigns the previewScheme as the currentScheme
    startSchemingPreview() {
        if (this.previewScheme.canBeLearned) {
            this._player.currentScheme = this.previewScheme;
            Base.EARNING_SCHEME_POINTS = true;
        }
    }

    //Clicking the currentScheme in the header assigns the currentScheme as the previewScheme
    switchToCurrentSchemePreview() {
        if (this.earningSchemePoints()) {
            this.selected = this._player.currentScheme['tree'];
            this.previewScheme = this._player.currentScheme;
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
        this._player.schemes[this._player.currentScheme.ref]['exp'] += num;
        if (this._player.currentScheme.exp >= this._player.currentScheme.target){
            this._player.schemes[this._player.currentScheme.ref]['level']++;
            this._player.schemes[this._player.currentScheme.ref]['exp'] = 0;
            Base.EARNING_SCHEME_POINTS = false;
        }
    }

}