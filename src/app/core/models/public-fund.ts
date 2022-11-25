import { Archive } from "./city-file";

export interface IPublicFund {
    id: number,
    catalogue: string,
    denomination: string,
    description: string,
    date: Date,
    type: string,
    Archives: Archive[];
}
