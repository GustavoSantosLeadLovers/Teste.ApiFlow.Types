import { FunnelSequenceNumber, IListFunnelSequenceNumberRepository } from '../../../common/providers/LeadLoversProvider/models/funnels/IListFunnelSequenceNumberRepository';
type Message = {
    nodeId?: string;
} & FunnelSequenceNumber;
export declare class ListSequenceNumberService {
    private listFunnelSequenceNumberRepository;
    constructor(listFunnelSequenceNumberRepository: IListFunnelSequenceNumberRepository);
    execute(machineId: number, flowId: string, leadloversId?: number, parentNode?: string): Promise<Message[]>;
    private verifyIfFlowBelongsToMachine;
    private getParentNodeByLeadloversId;
    private listMessagesFromFlowDB;
}
export {};
