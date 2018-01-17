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
    canSchemeBeLearned(id) {
        return this.schemes[id]['lair_req'][this.getSchemeCurrentLevel(id) + 1] <= this._player.lairLevel;
    }

    getSchemeCurrentLevel(id) {
        return this._player.schemes[id]['level'];
    }

    getTreeById(id) {
        if (id >= 0 && id <= 2) { return 'scheming'}
        if (id >= 3 && id <= 5) { return 'henchmen'}
        if (id >= 6 && id <= 8) { return 'operations'}
        if (id == 9 ) {return 'lairs'}
    }

    schemeLearnable(scheme) {
        return this._player.lairLevel >= scheme['lair_req'][this._player.schemes[scheme['ref']]['level']];
    }

    schemePreview(id) {

        this.previewScheme = this.schemes[id];
        this.previewSchemeLevel = this.getSchemeCurrentLevel(id) + 1;
        this.showPreview = true;

    }

    //A couple of scheme preview functions
    startSchemingPreview() {
        if (this.schemeLearnable(this.previewScheme)) {
            this._player.currentScheme = this.previewScheme;
            this.earningSchemePoints = true;
        }
    }

    switchToCurrentSchemePreview() {
        if (this.earningSchemePoints) {
            //Garbage. Needs to be actually coded.
            this.selected = this.getTreeById(this._player.currentScheme['ref'])
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
        if (this._player.schemes[this._player.currentScheme['ref']]['exp'] >= this._player.currentScheme['exp'][this._player.schemes[this._player.currentScheme['ref']]['level']]) {
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
        return this._player.currentScheme['exp'][this._player.schemes[this._player.currentScheme['ref']]['level'] * 1]
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP / this.currentSchemeEXPTarget) * 100);
    }

    get previewSchemeDescription() {
        return this.previewScheme['description'][this.previewSchemeLevel - 1]
    }

    get previewSchemeFlavor() {
        return this.previewScheme['flavor'][this.previewSchemeLevel - 1]
    }

    get previewSchemeExp() {
        return this._player.schemes[this.previewScheme['ref']]['exp'];
    }

    get previewSchemeExpTarget() {
        return this.previewScheme['exp'][this.previewSchemeLevel - 1]
    }

    get currentSchemeLevel() {
        return (this._player.schemes[this._player.currentScheme['ref']]['level'] * 1) + 1;
    }
}