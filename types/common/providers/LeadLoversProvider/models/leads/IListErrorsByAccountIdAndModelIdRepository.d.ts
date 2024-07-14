export type LeadErrors = {
    leadId: number;
    leadPhone: string;
    leadName: string;
    errorCode: number;
    errorDescription: string;
};
export interface IListErrorsByAccountIdAndModelIdRepository {
    list(usuaSistCodi: number, accountId: number, modelId: number): Promise<LeadErrors[]>;
}
