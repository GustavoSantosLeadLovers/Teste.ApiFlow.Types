export type EditTask = {
    modelId: number;
    name?: string;
    active?: boolean;
    weekdays?: string;
    initialSendingHour?: string;
    finalSendingHour?: string;
    fixedDate?: string;
};
export interface IEditTaskRepository {
    create(data: EditTask): Promise<void>;
}
