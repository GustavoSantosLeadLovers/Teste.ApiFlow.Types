import { IListCloudApiMessageErrorsRepository, MessageError } from '../../models/messages/IListCloudApiMessageErrorsRepository';
export declare class ListCloudApiMessageErrorsRepository implements IListCloudApiMessageErrorsRepository {
    list(): Promise<MessageError[]>;
}
