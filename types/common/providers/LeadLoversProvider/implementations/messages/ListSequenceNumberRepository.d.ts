import { IListSequenceNumberRepository, ListSequenceNumber } from '../../models/messages/IListSequenceNumberRepository';
export declare class ListSequenceNumberRepository implements IListSequenceNumberRepository {
    list(data: ListSequenceNumber): Promise<number>;
}
