import { IServiceRequest } from "./service-request";

export interface IUser {
    id: number;
    username: string;
    password: string;
    role: string;
    ci: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    nationality: string;
}
