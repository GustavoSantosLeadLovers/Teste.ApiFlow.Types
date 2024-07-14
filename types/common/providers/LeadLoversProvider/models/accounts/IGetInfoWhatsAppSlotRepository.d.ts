export type LeadsZappGetInstancesInfoResponseModel = {
    instances: [LeadsZappGetInstancesInfoInstanceResponseModel];
    error: LeadsZappErrorResponseModel;
};
export type LeadsZappGetInstancesInfoInstanceResponseModel = {
    uuid: string;
    status: string;
};
export type LeadsZappGetInstancesInfoRequestModel = {
    application_uuid: string;
    uuids: string[];
    generate_token: boolean;
};
export type LeadsZappErrorResponseModel = {
    StatusCode: number;
    StatusDescription: string;
};
export interface IGetInfoWhatsAppSlotRepository {
    list(apiKey: string, data: LeadsZappGetInstancesInfoRequestModel): Promise<LeadsZappGetInstancesInfoResponseModel>;
}
