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
    /*

    //Get basic details from the player service
    get currentStore() {
        return this._player.recruiting[this.id]['currentStore'];
    }

    get countdown() {
        return this._player.recruiting[this.id]['countdown'];
    }

    get lock() {
        return this._player.recruiting[this.id]['lock'];
    }

    //Other structural details, not necessarily coming from the player service.
    get type() {
        if (this.id == 0 || this.id == 1) {
            return 'help-wanted';
        }
    }

    get capacity() {
        if (this.type == 'help-wanted') {
            var capacity = 1;
            capacity += this._numbers.hiredHelpCapacity();
            return capacity;
        }
    }

    get percentage() {
        if (this.isRecruiting) {
            return 100 * (1 - (this.countdown / this.lock))
        } else {
            return 100
        }
    }

    //Activity properties of this recruitment object. Used extensively by the view.
    get isUnlocked() {
        if (this.type == 'help-wanted') {
            return this._numbers.hiredHelpUnlocked(this.id);
        }
    }

    get isFull() {
        return this.currentStore == this.capacity;
    }

    get isRecruiting() {
        return this.isUnlocked && !this.isFull;
    }
    */

}