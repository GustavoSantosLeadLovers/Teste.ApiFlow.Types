import { IListMessagesByIdsRepository, Message } from '../../models/messages/IListMessagesByIdsRepository';
export declare class ListMessagessByIdsRepository implements IListMessagesByIdsRepository {
    list(ids: number[]): Promise<Message[]>;
}
