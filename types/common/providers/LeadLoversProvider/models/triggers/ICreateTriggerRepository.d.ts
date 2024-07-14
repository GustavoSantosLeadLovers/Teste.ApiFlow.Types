export type CreateTrigger = {
    userId: number;
    eventId: number;
    modelId: number;
    machineId: number;
    funnelId: number;
    timer: string | null;
};
export interface ICreateTriggerRepository {
    create(trigger: CreateTrigger): Promise<number>;
}
