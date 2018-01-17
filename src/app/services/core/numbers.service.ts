import { Injectable } from "@angular/core";
import { PlayerService } from "../player.service";

@Injectable()
export class NumbersService {

    constructor ( public _player: PlayerService) {

    }

    standardExpArray: Array<Number> = [
        60, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000
    ]

    standardLairReq: Array<Number> = [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3
    ]

    schemeLairReq: Array<Array<Number>> = [
        this.standardLairReq //0: Mastermind
    ]

    schemeExp: Array<Array<Number>> = [
        this.standardExpArray //0: Mastermind
    ]

    //Scheme Modifiers
    
    //01: Mastermind
    //1 scheme point per level per second.
    mastermindNumbers() {
        return this._player.schemes[0]['level'];
    }


}