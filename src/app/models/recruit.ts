import { NumbersService } from "../services/core/numbers.service"
import { PlayerService } from "../services/core/player.service"

export class Recruit {
    id: number;
    name: string;
    fa: string;
    currentStore: number;
    countdown: number;
    lock: number;
    type: string;
    

    public _player: PlayerService;
    public _numbers: NumbersService;

    constructor(
        id: number,
        currentStore: number,
        countdown: number,
        lock: number
    ) {
        this.id = id;
        this.currentStore = currentStore;
        this.countdown = countdown;
        this.lock = lock;

        

        if (this.id === 0) 
        { 
            this.name = "Sign Stapled to a Post";
            this.fa = "fa-user";
            this.type = "help-wanted";
        }
        if (this.id === 1)
        {
            this.name = "Newspaper Ad";
            this.fa = "fa-user";
            this.type = "help-wanted";
        }
    }

    
    /*

    get capacity() {
        if (this.type == 'help-wanted') {
            var capacity = 1;
            capacity += this._numbers.hiredHelpCapacity();
            return capacity;
        }
    }
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

    //Other structural details, not necessarily coming from the player service.
   

    

    

    //Activity properties of this recruitment object. Used extensively by the view.


}