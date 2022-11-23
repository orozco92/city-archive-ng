export interface IApiListResult<E> {
    rows: E[],
    count: number;
    skip?: number;
    limit?: number;
    pages?: number;
}
export interface IApiListQuery {
    search?: string
    [k: string]: any;
    skip?: number;
    limit?: number;
    noPaged?: boolean;
    order?: string;
}
