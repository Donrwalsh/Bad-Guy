import { Injectable } from "@angular/core";
import { PlayerService } from "./player.service";
import { NumbersService } from "./core/numbers.service";

@Injectable()
export class SchemingService {

    //Belongs elsewhere.
    coinFlip(times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= 0.5) { successes++ }
        }
        return successes;
    }

    constructor(public _player: PlayerService,
    public _numbers: NumbersService) { }

    //This object contains raw schemes from the database provided by app.component.ts and data.service.ts
    schemes;
    //Which scheme tree is selected by the scheme-panel
    selected = 'scheming';
    //Handling the preview scheme being displayed in the header
    previewScheme: Object = {};
    previewSchemeLevel;
    //Controls the appearance of the scheme-panel flyout
    showPreview: boolean = false;


    //Belongs in player service.
    earningSchemePoints: boolean = false;

    //By ID Functions
    getFaById(id) {
        if (id == 0) { return 'fa-graduation-cap'}
        if (id == 1) { return 'fa-hand-spock-o'}
        if (id == 2) { return 'fa-flash'}
        if (id == 3) { return 'fa-address-book'}
        if (id == 4) { return 'fa-shield'}
        if (id == 5) { return 'fa-bed'}
        if (id == 6) { return 'fa-usd'}
        if (id == 7) { return 'fa-address-card-o'}
        if (id == 8) { return 'fa-microphone'}
        if (id == 9) { return 'fa-angle-up'}
    }

    canSchemeBeLearned(id) {
        return this._numbers.schemeLairReq[id][this.getSchemeCurrentLevel(id) + 1] <= this._player.lairLevel;
    }

    getSchemeCurrentLevel(id) {
        return this._player.schemes[id]['level'];
    }

    showSchemeButtonInPreviewScheme() {
        return (this.previewScheme['ref'] != this._player.currentScheme['ref']) && this.canSchemeBeLearned(this.previewScheme['ref'])
    }

    schemePreviewFa() {
        return this.getFaById(this.previewScheme['ref']);
    }

    schemePreview(id) {

        this.previewScheme = this.schemes[id];
        this.previewSchemeLevel = this.getSchemeCurrentLevel(id);
        this.showPreview = true;

    }

    //A couple of scheme preview functions
    startSchemingPreview() {
        if (this.canSchemeBeLearned(this.previewScheme['ref'])) {
            this._player.currentScheme = this.previewScheme;
            this.earningSchemePoints = true;
        }
    }

    switchToCurrentSchemePreview() {
        if (this.earningSchemePoints) {
            //Garbage. Needs to be actually coded.
            this.selected = this._player.currentScheme['tree'];
            this.previewScheme = this._player.currentScheme;
            this.showPreview = true;
        }
    }

    //Scheming during the loop calculation getters
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

    //Scheme Calculation Loop Setter
    earnSchemePoints(num) {
        this._player.schemes[this._player.currentScheme['ref']]['exp'] += num;
        console.log("if (" + this._player.schemes[this._player.currentScheme['ref']]['exp'] + " >= " + this._numbers.schemeExp[this._player.currentScheme['ref']][this._player.schemes[this._player.currentScheme['ref']]['level']] + ")")
        if (this._player.schemes[this._player.currentScheme['ref']]['exp'] >= this._numbers.schemeExp[this._player.currentScheme['ref']][this._player.schemes[this._player.currentScheme['ref']]['level']]) {
            this._player.schemes[this._player.currentScheme['ref']]['level']++;
            this._player.schemes[this._player.currentScheme['ref']]['exp'] = 0;
            if (this.previewScheme == this._player.currentScheme) {
                this.previewSchemeLevel++;
            }
            this._player.currentScheme = {};
            this.earningSchemePoints = false;
        }
    }

    //Vanilla Getters

    get currentSchemeEXP() {
        return this._player.schemes[this._player.currentScheme['ref']]['exp'];
    }

    get currentSchemeEXPTarget() {
        var currentSchemeId = this._player.currentScheme['ref'];
        return Number(this._numbers.schemeExp[currentSchemeId][this._player.schemes[currentSchemeId]['level']]);
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP / this.currentSchemeEXPTarget) * 100);
    }

    get previewSchemeDescription() {
        return this.previewScheme['description'][this.previewSchemeLevel];
    }

    get previewSchemeFlavor() {
        return this.previewScheme['flavor'][this.previewSchemeLevel]
    }

    get previewSchemeExp() {
        return this._player.schemes[this.previewScheme['ref']]['exp'];
    }

    get previewSchemeExpTarget() {
        return this._numbers.schemeExp[this.previewScheme['ref']][this.previewSchemeLevel]
    }

    get currentSchemeLevel() {
        return (this._player.schemes[this._player.currentScheme['ref']]['level'] * 1) + 1;
    }
}