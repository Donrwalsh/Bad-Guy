export class Train {
    id: number;
    name: string;
    fa: string;
    currentStore: number;
    countdown: number;
    lock: number;
    queued: number;

    constructor(
        id: number,
        currentStore: number,
        countdown: number,
        lock: number,
        queued: number
    ) {
        this.id = id;
        this.currentStore = currentStore;
        this.queued = queued;
        this.countdown = countdown;
        this.lock = lock;

        if (this.id === 0) 
        { 
            this.name = "Guard";
            this.fa = "fa-shield";
        }
    }

}