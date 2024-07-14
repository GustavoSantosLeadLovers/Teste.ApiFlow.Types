import { IListLeadsFromMessageRepository } from '../../models/messages/IListLeadsFromMessageRepository';
export declare class ListLeadsFromMessageRepository implements IListLeadsFromMessageRepository {
    list(listCodi: number, funiCodi: number, messageSequenceNumber: number): Promise<number>;
}
