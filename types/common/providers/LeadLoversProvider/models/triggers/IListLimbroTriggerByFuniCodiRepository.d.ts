export type LimbroTrigger = {
    id: number;
};
export interface IListLimbroTriggerByFuniCodiRepository {
    list(funiCodi: number): Promise<LimbroTrigger>;
}
