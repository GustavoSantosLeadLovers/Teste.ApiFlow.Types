import { IListActiveMessagesByFuniCodiRepository, MessageByFuniCodi } from '../../models/messages/IListActiveMessagesByFuniCodiRepository';
export declare class ListActiveMessagesByFuniCodiRepository implements IListActiveMessagesByFuniCodiRepository {
    list(funiCodi: number): Promise<MessageByFuniCodi[]>;
}
