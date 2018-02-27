import {Scheme} from '../app/models/scheme';
import {environment} from '../environments/environment';

export class Base {

    ENV_NAME = environment.envName;

    // Foundational Variables
    
    //Schemes
    static INITIAL_LOAD_SCHEMES: boolean = true;
    static EARNING_SCHEME_POINTS: boolean = false;
    static SCHEMES: Array<Scheme>;
    static CURRENT_SCHEME: Scheme;

    //Henchmen
    static INITIAL_LOAD_RECRUITS: boolean = true;
    static CURRENT_HENCHMEN: number;
    static CURRENT_GUARDS: number;

    //Lairs
    static LAIR_LEVEL: number;
    static CURRENT_LAIR_HP: number;

    //Currency
    static CASH: number;
    static PASSIVE_CASH: Array<number>;
    static BANKED_SCHEME_POINTS: number;

    //Notoriety
    static NOTORIETY: number;

    notorietyAdd(value) {
        Base.NOTORIETY += value;
        Base.NOTORIETY = Math.round(Base.NOTORIETY * 10) / 10;
    }

    bankedSchemePointsAdd(value) {
        Base.BANKED_SCHEME_POINTS += value;
        Base.BANKED_SCHEME_POINTS = Math.round(Base.BANKED_SCHEME_POINTS*100) / 100;
    }

    bankedSchemePointsSubtract(value) {
        Base.BANKED_SCHEME_POINTS -= value;
        Base.BANKED_SCHEME_POINTS = Math.round(Base.BANKED_SCHEME_POINTS*100) / 100;
    }

    

    //Array Building Blocks
    standardExpArray: Array<number> = [
        10, 45, 120, 180, 240, 
        600, 1500, 3000, 6000, 18000, 
        6000, 15000, 30000, 60000, 180000, 
        60000, 150000, 300000, 600000, 1800000
    ]

    beginnerLairExpArray: Array<number> = [ 
        600, 900, 1500, 2400, 3900, 
        600, 1500, 3000, 6000, 18000, 
        6000, 15000, 30000, 60000, 180000, 
        60000, 150000, 300000, 600000, 1800000 ]

    standardLairReq: Array<number> = [
        0, 0, 0, 0, 0, 
        1, 1, 1, 1, 1, 
        2, 2, 2, 2, 2, 
        3, 3, 3, 3, 3
    ]

    phaseOneLairReq: Array<number> = [ 
        1, 1, 1, 1, 1, 
        2, 2, 2, 2, 2, 
        3, 3, 3, 3, 3,
        4, 4, 4, 4, 4
    ]

    standardCashArray: Array<number> = [ 
        0, 0, 0, 0, 0,
        100, 200, 300, 400, 500
    ]

    beginnerLairCashArray: Array<number> = [
        100, 200, 300, 400, 500
    ]    

    //Arrays for constructing Schemes
    schemeExp: Array<Array<number>> = [
        this.standardExpArray, //0: Mastermind
        this.standardExpArray, //1: Cold Logic
        this.standardExpArray, //2: Quick Thinking
        this.standardExpArray, //3: Hired Help
        this.standardExpArray, //4: Guard Duty
        this.standardExpArray, //5: Lodging
        this.standardExpArray, //6: Heists
        this.standardExpArray, //7: Act I
        this.standardExpArray, //8: Communications
        this.beginnerLairExpArray, //9: Starter Lair
        this.beginnerLairExpArray, //10: King's Castle
        this.beginnerLairExpArray, //11: Maintenance
        this.beginnerLairExpArray, //12: Rocket Science
        this.beginnerLairExpArray, //13: Advanced Mathematics
        this.beginnerLairExpArray //14: Revisit Rejected Revelations

    ]   

    schemeLairReq: Array<Array<number>> = [
        this.standardLairReq, //0: Mastermind
        this.standardLairReq, //1: Cold Logic
        this.standardLairReq, //2: Quick Thinking
        this.standardLairReq, //3: Hired Help
        this.standardLairReq, //4: Guard Duty
        this.standardLairReq, //5: Lodging
        this.standardLairReq, //6: Heists
        this.standardLairReq, //7: Act I
        this.standardLairReq, //8: Communications
        this.standardLairReq, //9: Beginner Lair
        this.phaseOneLairReq, //10: King's Castle
        this.phaseOneLairReq, //11: Maintenance
        this.phaseOneLairReq, //12: Rocket Science
        this.phaseOneLairReq, //13: Advanced Mathematics
        this.phaseOneLairReq //14: Revisit Rejected Revelations
    ]

    schemeCashCost: Array<Array<number>> = [
        this.standardCashArray, //0: Mastermind
        this.standardCashArray, //1: Cold Logic
        this.standardCashArray, //2: Quick Thinking
        this.standardCashArray, //3: Hired Help
        this.standardCashArray, //4: Guard Duty
        this.standardCashArray, //5: Lodging
        this.standardCashArray, //6: Heists
        this.standardCashArray, //7: Act I
        this.standardCashArray, //8: Communications
        this.beginnerLairCashArray, //9: Beginner Lair
        this.beginnerLairCashArray, //10: King's Castle
        this.beginnerLairCashArray, //11: Maintenance
        this.beginnerLairCashArray, //12: Rocket Science
        this.beginnerLairCashArray, //13: Advanced Mathematics
        this.beginnerLairCashArray //14: Revisit Rejected Revelations
    ]

}