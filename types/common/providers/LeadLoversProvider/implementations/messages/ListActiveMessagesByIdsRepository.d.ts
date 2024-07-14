import { IListActiveMessagesByIdsRepository, MessageById } from '../../models/messages/IListActiveMessagesByIdsRepository';
export declare class ListActiveMessagesByIdsRepository implements IListActiveMessagesByIdsRepository {
    list(ids: number[]): Promise<MessageById[]>;
}
