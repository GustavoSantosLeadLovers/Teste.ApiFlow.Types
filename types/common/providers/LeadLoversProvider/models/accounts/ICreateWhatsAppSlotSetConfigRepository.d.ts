export type LeadsZappResponseModel = {
    token: string;
    status: boolean;
    message: string;
    count: number;
    success: boolean;
    error: LeadsZappErrorResponseModel;
};
export type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export interface ICreateWhatsAppSlotSetConfigRepository {
    edit(apiKey: string, instanceUuid: string): Promise<LeadsZappResponseModel>;
}
