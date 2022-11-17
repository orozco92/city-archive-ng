import { IServiceRequest } from "./service-request";

export interface IServiceRequestForeignIndex {
    id: number;
    name: string;
    lastName: string;
    nationality: string;
    informationOfInterest: string;
    createdAt: Date;
    updatedAt: Date;
    ServiceRequestId: number;
    ServiceRequest: IServiceRequest;
}
