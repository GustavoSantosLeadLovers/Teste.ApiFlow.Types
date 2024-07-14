export type LeadsZappRequestModel = {
    instance_uuid: string;
    expire: string;
};
export type LeadsZappResponseModel = {
    token: string;
    status?: string;
    message?: string;
    count?: number;
    success?: boolean;
    error?: LeadsZappErrorResponseModel;
};
export type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export interface IListTokenQrCodeRespository {
    list(apiKey: string, dataBody: LeadsZappRequestModel): Promise<LeadsZappResponseModel>;
}
