import { IListMessageRepository, Message } from '../../models/messages/IListMessageRepository';
export declare class ListMessageRepository implements IListMessageRepository {
    list(modeCodi: number): Promise<Message>;
}
