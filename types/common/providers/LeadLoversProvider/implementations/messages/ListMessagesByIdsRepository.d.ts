import { IListMessagesByIdsRepository, Message } from '../../models/messages/IListMessagesByIdsRepository';
export declare class ListMessagesByIdsRepository implements IListMessagesByIdsRepository {
    list(ids: number[]): Promise<Message[]>;
}
