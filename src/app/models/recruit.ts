import { NumbersService } from "../services/core/numbers.service"
import { PlayerService } from "../services/core/player.service"
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

export class Recruit {
    id: number;
    currentStore: number;
    countdown: number;
    lock: number;

    public _player: PlayerService;
    public _numbers: NumbersService;

    constructor(
        id: number,
        currentStore: number,
        countdown: number,
        lock: number
    ) {}

    //How many henchmen can the recruitment object hold?
    get capacity() {
        return 5;
        /*if (this.id == 0 || this.id == 1) { //Help Wanted Objects
            var capacity = 1;
            capacity += this._numbers.hiredHelpCapacity();
            return capacity;
        } else {
            return 0;
        }*/
    }

    /*




    ref: number;
    name: string;
    description: Array<string>;
    flavor: Array<string>;
    tree: string;
    fa: string;

    public _player: PlayerService;
    public _numbers: NumbersService;

    constructor(
        ref: number,
        name: string,
        description: Array<string>,
        flavor: Array<string>,
        tree: string,
    ) {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.flavor = flavor;
        this.tree = tree;

        if (this.ref == 0) { this.fa = 'fa-graduation-cap'}
        if (this.ref == 1) { this.fa = 'fa-hand-spock-o'}
        if (this.ref == 2) { this.fa = 'fa-flash'}
        if (this.ref == 3) { this.fa = 'fa-address-book'}
        if (this.ref == 4) { this.fa = 'fa-shield'}
        if (this.ref == 5) { this.fa = 'fa-bed'}
        if (this.ref == 6) { this.fa = 'fa-usd'}
        if (this.ref == 7) { this.fa = 'fa-suitcase'}
        if (this.ref == 8) { this.fa = 'fa-microphone'}
        if (this.ref == 9) { this.fa = 'fa-angle-up'}
    }   

    //Array of exp amounts for level advancement
    get expTarget() {
        return this._numbers.schemeExp[this.ref];
    }

    //Array of lair level requirements
    get lairReq() {
        return this._numbers.schemeLairReq[this.ref];
    }

    //Accrued exp so far toward the current level
    get exp() {
        return this._player.schemes[this.ref]['exp'];
    }

    //Current scheme level (0-19)
    get level() {
        return this._player.schemes[this.ref]['level'];
    }

    //Amount of exp to accrue for advancement to next level
    get target() {
        return this.expTarget[this.level]
    }

    //Are all prerequisites met to begin scheming?
    get canBeLearned() {
        return this.learnLair;
    }

    //Does the player satisfy the lair requirement?
    get learnLair() {
        return this.lairReq[this.level + 1] <= this._player.lairLevel;
    }

    //Getter for preview flyout
    get previewDescription() {
        return this.description[this.level]
    }

    //Getter for preview flyout
    get previewFlavor() {
        return this.flavor[this.level]
    }

    //Getter for preview flyout
    get previewLairLevel() {
        return this.lairReq[this.level+1]
    }

    //Getter for header progress bar
    get percentage() {
        return Math.round((this.exp / this.target) * 100);
    }

    
    */

}