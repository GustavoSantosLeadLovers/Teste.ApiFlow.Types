import { CreateMessage, ICreateMessageRepository } from '../../models/messages/ICreateMessageRepository';
export declare class CreateMessageRepository implements ICreateMessageRepository {
    create(message: CreateMessage): Promise<number>;
}
