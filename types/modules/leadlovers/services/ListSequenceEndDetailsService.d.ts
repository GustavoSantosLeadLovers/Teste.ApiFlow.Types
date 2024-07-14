import { IListLeadsFromFunnelEndRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListLeadsFromFunnelEndRepository';
import { IListNextSequenceNumberRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListNextSequenceNumberRepository';
import { IListLimboTriggerQuantityExecTodayRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListLimboTriggerQuantityExecTodayRepository';
import { IListLimboTriggerQuantityLockedRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListLimboTriggerQuantityLockedRepository';
import { IListLimbroTriggerByFuniCodiRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListLimbroTriggerByFuniCodiRepository';
export declare class ListSequenceEndDetailsService {
    private listNextSequenceNumberRepository;
    private listLeadsFromFunnelEndRepository;
    private listLimbroTriggerByFuniCodiRepository;
    private listLimboTriggerQuantityExecTodayRepository;
    private listLimboTriggerQuantityLockedRepository;
    constructor(listNextSequenceNumberRepository: IListNextSequenceNumberRepository, listLeadsFromFunnelEndRepository: IListLeadsFromFunnelEndRepository, listLimbroTriggerByFuniCodiRepository: IListLimbroTriggerByFuniCodiRepository, listLimboTriggerQuantityExecTodayRepository: IListLimboTriggerQuantityExecTodayRepository, listLimboTriggerQuantityLockedRepository: IListLimboTriggerQuantityLockedRepository);
    execute(userId: number, listCodi: number, funiCodi: number, flowId: string): Promise<{
        id: string;
        leads: number;
        leadsExecToday: number;
        leadsLocked: number;
    }>;
}
