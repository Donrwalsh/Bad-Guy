import {Scheme} from '../app/models/scheme';

export class Base {
    static EARNING_SCHEME_POINTS: boolean = false;

    static SCHEMES: Array<Scheme>;

    public earningSchemePoints() {
        return Base.EARNING_SCHEME_POINTS;
    }
}