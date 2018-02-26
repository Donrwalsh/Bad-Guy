export class Scheme {
    ref: number;
    name: string;
    description: Array<string>;
    flavor: Array<string>;
    tree: string;
    fa: string;
    exp: number;
    cash: number;
    level: number;
    lairReq: Array<number>;
    expTargets: Array<number>;
    cashCosts: Array<number>;

    constructor(
        ref: number,
        name: string,
        description: Array<string>,
        flavor: Array<string>,
        tree: string,
        exp: number,
        cash: number,
        level: number,
        lairReq: Array<number>,
        expTargets: Array<number>,
        cashCosts: Array<number>
    ) {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.flavor = flavor;
        this.tree = tree;
        this.exp = exp;
        this.cash = cash;
        this.level = level;
        this.lairReq = lairReq;
        this.expTargets = expTargets;
        this.cashCosts = cashCosts;

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
        if (this.ref == 10) { this.fa = 'fa-fort-awesome'}
        if (this.ref == 11) { this.fa = 'fa-wrench'}
        if (this.ref == 12) { this.fa = 'fa-rocket'}
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

    get currentCashCost() {
        return this.cashCosts[this.level];
    }

    //Getter for header progress bar
    get percentage() {
        return Math.round((this.exp / this.currentExpTarget) * 100);
    }

}