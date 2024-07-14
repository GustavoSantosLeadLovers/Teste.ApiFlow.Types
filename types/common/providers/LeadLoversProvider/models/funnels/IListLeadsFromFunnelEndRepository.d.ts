export interface IListLeadsFromFunnelEndRepository {
    list(listCodi: number, funiCodi: number, funiLength: number): Promise<number>;
}
