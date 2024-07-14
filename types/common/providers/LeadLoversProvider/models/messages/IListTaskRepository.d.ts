export type Task = {
    tareCodi: number;
    modeCodi: number;
    name: string;
    active: boolean;
    weekdays: string;
    initialSendingHour: string;
    finalSendingHour: string;
    fixedDate: string;
};
export interface IListTaskRepository {
    list(modeCodi: number): Promise<Task>;
}
