export interface IListLimboTriggerQuantityExecTodayRepository {
    list(triggerId: number): Promise<number>;
}
