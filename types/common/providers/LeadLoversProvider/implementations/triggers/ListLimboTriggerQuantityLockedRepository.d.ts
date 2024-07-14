import { IListLimboTriggerQuantityLockedRepository } from '../../models/triggers/IListLimboTriggerQuantityLockedRepository';
export declare class ListLimboTriggerQuantityLockedRepository implements IListLimboTriggerQuantityLockedRepository {
    list(userId: number, triggerId: number, listCodi: number, funiCodi: number, funiLength: number): Promise<number>;
}
