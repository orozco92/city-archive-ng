export interface IServiceRequest {
    id: number;
    ci: string;
    name: string;
    lastName: string;
    email: string;
    address: string;
    nationality: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    InformativeServiceId: number;
    RequestedById: number;
    requested_by: number;
}
