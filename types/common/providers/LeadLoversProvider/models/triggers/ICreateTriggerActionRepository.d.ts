export type CreateTriggerAction = {
    triggerId: number;
    typeId: number;
    machineId?: number;
    funnelId?: number;
    funnelLevel?: number;
    score?: number;
    tagId?: number;
    assignTo?: 'attendant' | 'team' | null;
    assignRefId?: number;
    respFieldId?: number | null;
    respFieldName?: string | null;
    productId?: number | null;
    crmBoardId?: number | null;
    crmColumnId?: number | null;
    crmGroupId: number | null;
};
export interface ICreateTriggerActionRepository {
    create(action: CreateTriggerAction): Promise<number>;
}
