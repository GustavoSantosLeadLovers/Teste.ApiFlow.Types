import { IListNextSequenceNumberRepository, ListSequenceNumber } from '../../models/funnels/IListNextSequenceNumberRepository';
export declare class ListNextSequenceNumberRepository implements IListNextSequenceNumberRepository {
    list(data: ListSequenceNumber): Promise<number>;
}
