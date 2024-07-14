import { Funnel, IListFunnelsByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelsByListCodiRepository';
type Sequence = {
    nodeId?: string;
} & Funnel;
export declare class ListSequencesByMachineIdService {
    private listFunnelsByListCodiRepository;
    constructor(listFunnelsByListCodiRepository: IListFunnelsByListCodiRepository);
    execute(machineId: number, flowId: string): Promise<Sequence[]>;
    private verifyIfFlowBelongsToMachine;
    private listFlowSequences;
    private listLeadloversSequences;
}
export {};
