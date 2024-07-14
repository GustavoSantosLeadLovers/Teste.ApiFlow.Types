export type CreateTask = {
    modelId: number;
    name: string;
    active: boolean;
    weekdays: string;
    initialSendingHour: string;
    finalSendingHour: string;
    fixedDate?: string;
};
export interface ICreateTaskRepository {
    create(data: CreateTask): Promise<void>;
}
