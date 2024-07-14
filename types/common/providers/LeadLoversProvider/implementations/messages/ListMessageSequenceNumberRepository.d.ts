import { IListMessageSequenceNumberRepository } from '../../models/messages/IListMessageSequenceNumberRepository';
export declare class ListMessageSequenceNumberRepository implements IListMessageSequenceNumberRepository {
    list(modeCodi: number): Promise<number>;
}
