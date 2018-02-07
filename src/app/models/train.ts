import { NumbersService } from "../services/core/numbers.service"
import { PlayerService } from "../services/core/player.service"

export class Train {
    id: number;
    name: string;
    fa: string;

    public _player: PlayerService;
    public _numbers: NumbersService;

    constructor(
        id: number,
    ) {
        this.id = id;

        if (this.id === 0) 
        { 
            this.name = "Guard";
            this.fa = "fa-shield";
        }
    }

    get currentStore() {
        return this._player.training[this.id]['currentStore'];
    }

    get isUnlocked() {
        if (this.id == 0) {
            return this._numbers.guardDutyUnlocked;
        }
    }

    get capacity() {
        if (this.id === 0) { //Guards
            var capacity = 1;
            capacity += this._numbers.guardDutyCapacity();
            return capacity;
        }
    }

    get isFull() {
        return this.currentStore == this.capacity;
    }
}