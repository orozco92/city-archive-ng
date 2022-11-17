export interface IInformativeService {
    id: number;
    name: string;
    description: string;
    priceNative: number;
    priceForeign: number;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
