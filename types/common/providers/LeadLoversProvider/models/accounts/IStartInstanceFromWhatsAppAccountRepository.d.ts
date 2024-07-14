export type LeadsZappResponseModel = {
    token: string;
    status: string;
    message: string;
    count: number;
    success: boolean;
    error: LeadsZappErrorResponseModel;
};
export type LeadsZappErrorResponseModel = {
    statusCode: number;
    statusDescription: string;
};
export interface IStartInstanceFromWhatsAppAccountRepository {
    list(apiKey: string, instanceUuid: string): Promise<LeadsZappResponseModel>;
}
