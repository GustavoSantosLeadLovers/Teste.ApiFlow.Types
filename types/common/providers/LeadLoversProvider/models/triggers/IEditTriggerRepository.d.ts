export type EditTrigger = {
    id: number;
    eventId?: number;
    machineId?: number;
    funnelId?: number;
    modelId?: number;
    timer?: string | null;
};
export interface IEditTriggerRepository {
    edit(trigger: EditTrigger): Promise<void>;
}
