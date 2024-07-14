export type LeadsZappCreateInstanceResponseModel = {
    uuid: string;
    api_key: string;
    error: LeadsZappErrorResponseModel;
};
export type LeadsZappCreateInstanceRequestModel = {
    name?: string;
    application_uuid: string;
    image_uuid: string;
};
export type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export interface ICreateLeadsZappInstanceRepository {
    edit(data: LeadsZappCreateInstanceRequestModel): Promise<LeadsZappCreateInstanceResponseModel>;
}
