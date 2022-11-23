export enum ServiceRequestStatusEnum {
    CREATED = 'CREATED',
    ONGOING = 'ONGOING',
    READY = 'READY',
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
            case ServiceRequestStatusEnum.READY:
                return "Lista"
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
                return "p-badge-primary"
            case ServiceRequestStatusEnum.READY:
                return "p-badge-warning"
            case ServiceRequestStatusEnum.DONE:
                return "p-badge-success"
            case ServiceRequestStatusEnum.CANCELLED:
                return "p-badge-danger"
            default:
                return "INVALID_STAUS";
        }
    }
}
