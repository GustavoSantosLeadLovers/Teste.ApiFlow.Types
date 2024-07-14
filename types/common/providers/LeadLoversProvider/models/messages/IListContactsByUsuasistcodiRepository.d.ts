import { Contact } from './IListContactsByModeCodiRepository';
export interface IListContactsByUsuasistcodiRepository {
    list(usuaSistCodi: number): Promise<Contact[]>;
}
