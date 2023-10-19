export interface DigimonInterface{
    id: number;
    name: string;
    hp: number;
    ds: number;
    de: number;
    at: number;
    as: number;
    ct: number;
    ht: number;
    ev: number;
    form: number;
    attribute: number;
    description: string;
    elementalAttribute: number;
    skill:[
        {
            name: string;
            description: string;
            attribute: number;
            coolDown: number;
            dsConsumed: number;
            necessarySkillPoint: number;
            animationTime: number;
            asb ?: boolean;
            buff? : {
                name: string;
                description: string;
                activationPercentage: number;
            };
        }
    ];
    families: [
        {
            name: string;
            description: string;
            abbreviation: string;
        }
    ];
    itens:[
        {
            name: string;
            description: string;
            type: string;
            quantity: number;
        }
    ];     
};