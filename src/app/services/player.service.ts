import { Injectable } from "@angular/core";

@Injectable()
export class PlayerService {

    //Player Stats
    currentScheme: Object = {};
    currentSchemeLevel: number = 0;
    earningSchemePoints: boolean = false;
    lairLevel: number = 0;
    schemes: Array<Object> = [
        { level: 5, exp: 0 },
        { level: 1, exp: 0 },
        { level: 1, exp: 0 }
    ]

    get currentSchemeEXP() {
        return this.schemes[this.currentScheme['ref']]['exp'];
    }

    get currentSchemeEXPTarget() {
        return  this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']*1]
    }

    get currentSchemePercentage() {
        return Math.round((this.currentSchemeEXP/this.currentSchemeEXPTarget)*100);
    }
    

    currentSchemeJustLearned() {
        return this.schemes[this.currentScheme['ref']]['exp'] >= this.currentScheme['exp'][this.schemes[this.currentScheme['ref']]['level']];
    }

    levelCurrentScheme() {
        this.schemes[this.currentScheme['ref']]['level']++;
        this.schemes[this.currentScheme['ref']]['exp'] = 0;
        this.currentScheme = {};
        this.earningSchemePoints = false;
    }

    schemeLearnable(scheme) {
        return this.lairLevel >= scheme['lair_req'][this.schemes[scheme['ref']]['level']];
    }

    setCurrentSchemeLevel() {
        this.currentSchemeLevel = (this.schemes[this.currentScheme['ref']]['level'] * 1) +1;
    }

}