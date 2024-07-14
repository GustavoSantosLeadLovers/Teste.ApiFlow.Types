import { Funnel, IListFunnelRepository } from '../../models/funnels/IListFunnelRepository';
export declare class ListFunnelRepository implements IListFunnelRepository {
    list(funiCodi: number): Promise<Funnel | null>;
}
