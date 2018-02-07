import { NumbersService } from "../services/core/numbers.service"
import { PlayerService } from "../services/core/player.service"

export class Scheme {
    ref: number;
    name: string;
    description: Array<string>;
    flavor: Array<string>;
    tree: string;
    fa: string;
    exp: number;
    level: number;
    lairReq: Array<number>;
    expTargets: Array<number>;

    constructor(
        ref: number,
        name: string,
        description: Array<string>,
        flavor: Array<string>,
        tree: string,
        exp: number,
        level: number,
        lairReq: Array<number>,
        expTargets: Array<number>
    ) {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.flavor = flavor;
        this.tree = tree;
        this.exp = exp;
        this.level = level;
        this.lairReq = lairReq;
        this.expTargets = expTargets;

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

    //Getters for current values from arrays.
    get currentExpTarget() {
        return this.expTargets[this.level];
    }
    
    get currentDescription() {
        return this.description[this.level]
    }

    get currentFlavor() {
        return this.flavor[this.level]
    }

    get currentLairLevel() {
        return this.lairReq[this.level+1]
    }

    //Getter for header progress bar
    get percentage() {
        return Math.round((this.exp / this.currentExpTarget) * 100);
    }

}