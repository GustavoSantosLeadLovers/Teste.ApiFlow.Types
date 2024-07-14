export interface IListLimboTriggerQuantityLockedRepository {
    list(userId: number, triggerId: number, listCodi: number, funiCodi: number, funiLength: number): Promise<number>;
}
