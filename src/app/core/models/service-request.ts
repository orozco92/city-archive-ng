import { IInformativeService } from './informative-service';
import { IServiceRequestForeignIndex } from './service-request-foreign-index';
import { IServiceRequestNotarialProtocol } from './service-request-notarial-protocol';

export interface IServiceRequest {
    id: number;
    ci: string;
    name: string;
    lastName: string;
    email: string;
    address: string;
    nationality: string;
    description: string;
    date: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    InformativeServiceId: number;
    InformativeService: IInformativeService;
    ServiceRequestForeignIndex?: IServiceRequestForeignIndex;
    ServiceRequestNotarialProtocol?: IServiceRequestNotarialProtocol;
    RequestedById: number;
    requested_by: number;
}
