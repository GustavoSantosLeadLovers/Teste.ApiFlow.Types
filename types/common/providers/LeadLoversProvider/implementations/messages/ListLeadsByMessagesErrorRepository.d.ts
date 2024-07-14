import { Lead } from '../../models/messages/IListLeadsByMessagesErrorRepository';
import { IListLeadsByMessagesErrorRepository } from '../../models/messages/IListLeadsByMessagesErrorRepository';
export declare class ListLeadsByMessagesErrorRepository implements IListLeadsByMessagesErrorRepository {
    list(modelId: number): Promise<Lead[]>;
}
