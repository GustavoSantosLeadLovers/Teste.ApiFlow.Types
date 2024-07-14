export type CreateConditionalTriggerAction = {
    triggerId: number;
    type: number;
    machineId: number;
    funnelId: number;
    funnelLevel: number;
    matchConditionals: boolean;
};
export interface ICreateConditionalTriggerActionRepository {
    create(action: CreateConditionalTriggerAction): Promise<number>;
}
