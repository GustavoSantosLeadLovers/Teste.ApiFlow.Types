import { IListSequenceNumberRepository, ListSequenceNumber } from '../../models/funnels/IListSequenceNumberRepository';
export declare class ListSequenceNumberRepository implements IListSequenceNumberRepository {
    list(data: ListSequenceNumber): Promise<number>;
}
