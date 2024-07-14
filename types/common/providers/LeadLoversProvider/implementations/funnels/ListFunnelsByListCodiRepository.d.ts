import { Funnel, IListFunnelsByListCodiRepository } from '../../models/funnels/IListFunnelsByListCodiRepository';
export declare class ListFunnelsByListCodiRepository implements IListFunnelsByListCodiRepository {
    list(listCodi: number): Promise<Funnel[]>;
}
