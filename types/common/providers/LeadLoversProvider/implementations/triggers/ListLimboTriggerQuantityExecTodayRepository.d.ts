import { IListLimboTriggerQuantityExecTodayRepository } from '../../models/triggers/IListLimboTriggerQuantityExecTodayRepository';
export declare class ListLimboTriggerQuantityExecTodayRepository implements IListLimboTriggerQuantityExecTodayRepository {
    list(triggerId: number): Promise<number>;
}
