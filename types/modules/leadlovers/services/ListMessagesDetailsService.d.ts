import { IListActiveMessagesByFuniCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListActiveMessagesByFuniCodiRepository';
import { IListLeadsFromMessageRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListLeadsFromMessageRepository';
type MessageDetails = {
    id: string;
    leads: number;
    sent: number;
    delivered: number;
    view: number;
    clicked: number;
    errors: number;
    unsub: number;
};
export declare class ListMessagesDetailsService {
    private listActiveMessagesByFuniCodiRepository;
    private listLeadsFromMessageRepository;
    constructor(listActiveMessagesByFuniCodiRepository: IListActiveMessagesByFuniCodiRepository, listLeadsFromMessageRepository: IListLeadsFromMessageRepository);
    execute(listCodi: number, funiCodi: number, flowId: string, sequenceId: string): Promise<MessageDetails[]>;
}
export {};
