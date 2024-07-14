export type ConditionalTrigger = {
    id: number;
    modelId: number;
    active: boolean;
};
export interface IListConditionalTriggerByIdRepository {
    list(triggerId: number): Promise<ConditionalTrigger | undefined>;
}
