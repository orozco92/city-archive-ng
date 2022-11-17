import { IServiceRequest } from "./service-request";

export interface IServiceRequestNotarialProtocol {
    id: number;
    type: string;
    appearingOrInvolved: string;
    startDate: Date;
    endDate: Date;
    city: string;
    notary: string;
    createdAt: Date;
    updatedAt: Date;
    ServiceRequestId: number;
    ServiceRequest: IServiceRequest;
}
