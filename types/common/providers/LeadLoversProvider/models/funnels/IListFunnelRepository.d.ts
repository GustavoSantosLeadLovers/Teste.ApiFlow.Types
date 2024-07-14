export type Funnel = {
    id: number;
};
export interface IListFunnelRepository {
    list(funiCodi: number): Promise<Funnel | null>;
}
