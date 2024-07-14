import { IListLeadsFromFunnelsByListCodiRepository, LeadsFromFunnel } from '../../models/funnels/IListLeadsFromFunnelsByListCodiRepository';
export declare class ListLeadsFromFunnelsByListCodiRepository implements IListLeadsFromFunnelsByListCodiRepository {
    list(listCodi: number): Promise<LeadsFromFunnel[]>;
}
