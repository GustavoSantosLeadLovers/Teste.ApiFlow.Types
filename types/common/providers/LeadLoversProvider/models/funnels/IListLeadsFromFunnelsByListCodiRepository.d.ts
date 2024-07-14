export type LeadsFromFunnel = {
    id: number;
    leads: number;
};
export interface IListLeadsFromFunnelsByListCodiRepository {
    list(listCodi: number): Promise<LeadsFromFunnel[]>;
}
