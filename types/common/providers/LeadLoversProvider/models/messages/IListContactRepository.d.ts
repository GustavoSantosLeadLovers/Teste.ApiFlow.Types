import { Contact } from './IListContactsByModeCodiRepository';
export interface IListContactRepository {
    list(usuaSistCodi: number, id: number): Promise<Contact | undefined>;
}
