export type Trigger = {
    id: number;
    userId: number;
    eventId: number;
    listCodi: number;
    funiCodi: number;
    modeCodi: number;
    timer: string;
};
export interface IListTriggersByIdsRepository {
    list(ids: number[]): Promise<Trigger[]>;
}
