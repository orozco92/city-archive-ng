export enum MessageServiceSeverityEnum {
    SUCCESS = 'success',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}

export class AppConstants {
    static readonly companyName = 'Archivo Historico Provincial de Holguín';
    static readonly companyNameShort = 'AH';
}

export enum Roles {
    ADMIN = 'ADMINISTRATOR',
    RESEARCHER = 'RESEARCHER',
    PUBLIC_USER = 'PUBLIC_USER',
    SERVICE_ADMIN = 'SERVICE_ADMIN',
    FUNDS_ADMIN = 'FUNDS_ADMIN',
}
