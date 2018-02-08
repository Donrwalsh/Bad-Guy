export class Operation {
    id: number;
    name: string;
    rarity: number; //0-4. Higher the number, higher the rarity.
    henchmenCost: number; 
    type: string;

    available: boolean;
    reward: number;
    success: number;
    risk: number;
    notoriety: number;
    countdown: number;
    lock: number;



    constructor(
        id: number,
        rarity: number,
        henchmenCost: number
        
    ) {
        this.id = id;
        this.rarity = rarity;
        this.henchmenCost = henchmenCost;

        if (this.id >= 0 && this.id <= 4) {
            this.type = "heist";
        } else if ( this.id >= 5 && this.id <= 9) {
            this.type = "shady-business-deal";
        }
        
    }


}