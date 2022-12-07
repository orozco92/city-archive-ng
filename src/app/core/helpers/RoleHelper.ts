export enum RoleEnum {
    ADMIN = 'ADMINISTRATOR',
    RESEARCHER = 'RESEARCHER',
    PUBLIC_USER = 'PUBLIC_USER',
    SERVICE_ADMIN = 'SERVICE_ADMIN',
    FUNDS_ADMIN = 'FUNDS_ADMIN',
}

export class RoleHelper {
    getRoleTranslation(status: RoleEnum) {
        switch (status) {
            case RoleEnum.ADMIN:
                return 'Administrador';
            case RoleEnum.PUBLIC_USER:
                return 'Usuario publico';
            case RoleEnum.RESEARCHER:
                return 'Investigador';
            case RoleEnum.SERVICE_ADMIN:
                return 'Administrador de servicios';
            case RoleEnum.FUNDS_ADMIN:
                return 'Administrador de servicios públicos';
            default:
                return 'INVALID_ROLE';
        }
    }
}
