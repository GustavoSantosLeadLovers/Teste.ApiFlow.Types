export type Funnel = {
    funiCodi: number;
};
export interface IListFunnelsByIdsRepository {
    list(ids: number[]): Promise<Funnel[]>;
}
