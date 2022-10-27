export enum ServiceRequestStatusEnum {
    CREATED = 'CREATED',
    ONGOING = 'ONGOING',
    CANCELLED = 'CANCELLED',
    DONE = 'DONE',
}

export class ServiceRequestStatusHelper {

    getStatusTranslation(status: ServiceRequestStatusEnum) {
        switch (status) {
            case ServiceRequestStatusEnum.CREATED:
                return "Creada"
            case ServiceRequestStatusEnum.ONGOING:
                return "En proceso"
            case ServiceRequestStatusEnum.DONE:
                return "Finalizada"
            case ServiceRequestStatusEnum.CANCELLED:
                return "Cancelada"
            default:
                return "INVALID_STAUS";
        }
    }

    getStatusLabelStyle(status: ServiceRequestStatusEnum) {
        switch (status) {
            case ServiceRequestStatusEnum.CREATED:
                return "p-badge-info"
            case ServiceRequestStatusEnum.ONGOING:
                return "bp-badgeg-primary"
            case ServiceRequestStatusEnum.DONE:
                return "p-badge-success"
            case ServiceRequestStatusEnum.CANCELLED:
                return "p-badge-danger"
            default:
                return "INVALID_STAUS";
        }
    }
}
