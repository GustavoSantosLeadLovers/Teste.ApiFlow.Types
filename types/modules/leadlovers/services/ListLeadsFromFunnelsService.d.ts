import { IListLeadsFromFunnelsByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListLeadsFromFunnelsByListCodiRepository';
export declare class ListLeadsFromFunnelsService {
    private listLeadsFromFunnelsByListCodiRepository;
    constructor(listLeadsFromFunnelsByListCodiRepository: IListLeadsFromFunnelsByListCodiRepository);
    execute(listCodi: number, flowId: string): Promise<{
        id: string;
        leads: number;
    }[]>;
}
