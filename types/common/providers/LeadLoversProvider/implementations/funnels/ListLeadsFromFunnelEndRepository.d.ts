import { IListLeadsFromFunnelEndRepository } from '../../models/funnels/IListLeadsFromFunnelEndRepository';
export declare class ListLeadsFromFunnelEndRepository implements IListLeadsFromFunnelEndRepository {
    list(listCodi: number, funiCodi: number, funiLength: number): Promise<number>;
}
