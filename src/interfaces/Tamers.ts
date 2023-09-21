export interface Tamers{
    id: number;
    at: number;
    de: number;
    ds: number;
    hp: number;
    name: string;
    description: string;
    skill:{
        name: string;
        description: string;
        coolDown: number;
        buff:{
            name: string;
            firstBuffAttribute: number;
            seccondBuffAttribute: number;
        };
    };
}