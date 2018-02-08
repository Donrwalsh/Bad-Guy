export class Operation {
    id: number;
    name: number;
    rarity: number; //0-4. Higher the number, higher the rarity.
    henchmenCost: number; 
    type: string;
    available: boolean;
    countdown: number;
    lock: number;

    
    reward: number;
    success: number;
    risk: number;
    notoriety: number;




    constructor(
        id: number,
        name: number,
        rarity: number,
        henchmenCost: number,
        available: boolean,
        countdown: number,
        lock: number
    ) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.henchmenCost = henchmenCost;
        this.available = available;
        this.countdown = countdown;
        this.lock = lock;

        if (this.id >= 0 && this.id <= 4) {
            this.type = "heist";
        } else if ( this.id >= 5 && this.id <= 9) {
            this.type = "shady-business-deal";
        }
        
    }


}