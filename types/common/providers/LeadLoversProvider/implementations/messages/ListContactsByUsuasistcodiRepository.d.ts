import { Contact } from '../../models/messages/IListContactsByModeCodiRepository';
import { IListContactsByUsuasistcodiRepository } from '../../models/messages/IListContactsByUsuasistcodiRepository';
export declare class ListContactsByUsuasistcodiRepository implements IListContactsByUsuasistcodiRepository {
    list(usuaSistCodi: number): Promise<Contact[]>;
}
