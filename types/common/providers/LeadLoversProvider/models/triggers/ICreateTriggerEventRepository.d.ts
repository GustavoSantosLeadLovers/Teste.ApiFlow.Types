export type CreateTriggerEvent = {
    userId: number;
    eventId: number;
    messageId: number;
    machineId: number;
    funnelId: number;
};
export interface ICreateTriggerEventRepository {
    create(triggerEvent: CreateTriggerEvent): Promise<number>;
}
