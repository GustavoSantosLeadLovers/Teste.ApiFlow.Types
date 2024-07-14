export type Lead = {
    leadId: number;
};
export interface IListLeadsByMessagesErrorRepository {
    list(modelId: number): Promise<Lead[]>;
}
