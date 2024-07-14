import { CreateMessage, ICreateEmailSequenceNotificationErrorRepository } from '../../models/emailSequence/ICreateEmailSequenceNotificationErrorRepository';
export declare class CreateEmailSequenceNotificationErrorRepository implements ICreateEmailSequenceNotificationErrorRepository {
    create(message: CreateMessage): Promise<void>;
}
