export interface errorResponse {
    status:number;
    code: string;
    msg: string;
}

export interface errorRecive {
    code?: string;
    error?: unknown;
}