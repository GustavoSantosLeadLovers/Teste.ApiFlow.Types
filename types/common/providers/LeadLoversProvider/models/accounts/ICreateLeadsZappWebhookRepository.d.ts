export type LeadsZappAddWebhookResponseModel = {
    id: string;
    status: boolean;
    message: string;
    error: LeadsZappErrorResponseModel;
};
export type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export type LeadsZappAddWebhookRequestModel = {
    instance_uuid: string;
    model: string;
    method: string;
    payload: LeadsZappPayloadRequestModel;
};
export type LeadsZappPayloadRequestModel = {
    headers: string[];
    name: string;
    url: string;
    events: string[];
    attachment: boolean;
    ack: boolean;
};
export interface ICreateLeadsZappWebhookRepository {
    edit(apiKey: string, data: LeadsZappAddWebhookRequestModel): Promise<LeadsZappAddWebhookResponseModel>;
}
