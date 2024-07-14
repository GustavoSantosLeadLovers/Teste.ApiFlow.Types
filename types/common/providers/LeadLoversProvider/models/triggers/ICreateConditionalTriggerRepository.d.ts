export interface ICreateConditionalTriggerRepository {
    create(modelId: number, active: boolean): Promise<number>;
}
