export class Operation {
    id: number;
    name: number;
    rarity: number; //0-4. Higher the number, higher the rarity.
    cost01: number; 
    type: string;
    available: boolean;
    countdown: number;
    lock: number;

    
    fa: string;
    success: number;
    risk: number;
    notoriety: number;




    constructor(
        id: number,
        name: number,
        rarity: number,
        cost01: number,
        available: boolean,
        countdown: number,
        lock: number
    ) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.cost01 = cost01;
        this.available = available;
        this.countdown = countdown;
        this.lock = lock;

        if (this.id >= 0 && this.id <= 4) {
            this.type = "heist";
            this.fa = "usd";
        } else if ( this.id >= 5 && this.id <= 9) {
            this.type = "shady-business-deal";
            this.fa = "suitcase";
        }
        
    }


}