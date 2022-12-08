import { Archive } from './city-file';

export interface INews {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    Archives: Archive[];
}
