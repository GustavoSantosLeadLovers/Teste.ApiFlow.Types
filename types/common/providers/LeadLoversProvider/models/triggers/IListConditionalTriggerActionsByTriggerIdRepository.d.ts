export type ConditionalTriggerAction = {
    triggerId: number;
    type: number;
    machineId: number;
    funnelId: number;
    funnelLevel: number;
    matchConditionals: boolean;
};
export interface IListConditionalTriggerActionsByTriggerIdRepository {
    list(triggerId: number): Promise<ConditionalTriggerAction[]>;
}
