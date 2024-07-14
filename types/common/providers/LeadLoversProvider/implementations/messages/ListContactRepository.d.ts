import { IListContactRepository } from '../../models/messages/IListContactRepository';
import { Contact } from '../../models/messages/IListContactsByModeCodiRepository';
export declare class ListContactRepository implements IListContactRepository {
    list(usuaSistCodi: number, id: number): Promise<Contact | undefined>;
}
