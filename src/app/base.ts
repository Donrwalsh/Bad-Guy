import {Scheme} from '../app/models/scheme';

export class Base {

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

    
    
    
    


    //Array Building Blocks
    standardExpArray: Array<number> = [
        10, 45, 120, 180, 240, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000
    ]

    specialExpArray: Array<number> = [ 6000, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000 ]


    standardLairReq: Array<number> = [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3
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
        this.specialExpArray //9: Starter Lair
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
        this.standardLairReq //9: Starter Lair 
    ]




}