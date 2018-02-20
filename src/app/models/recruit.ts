export class Recruit {
    id: number;
    name: string;
    fa: string;
    currentStore: number;
    countdown: number;
    lock: number;
    type: string;
    

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


}