import { NumbersService } from "../services/core/numbers.service"
import { PlayerService } from "../services/core/player.service"

export class Scheme {
    ref: number;
    name: string;
    description: Array<string>;
    flavor: Array<string>;
    tree: string;
    fa: string;
    expTarget: Array<number>;
    lairReq: Array<number>;

    constructor(
        public _player: PlayerService,
        public _numbers: NumbersService,
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
        this.expTarget = this._numbers.schemeExp[this.ref];
        this.lairReq = this._numbers.schemeLairReq[this.ref];

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

    
    

}