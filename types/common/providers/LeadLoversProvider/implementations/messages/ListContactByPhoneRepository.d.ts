import { IListContactByPhoneRepository } from '../../models/messages/IListContactByPhoneRepository';
export declare class ListContactByPhoneRepository implements IListContactByPhoneRepository {
    list(usuaSistCodi: number, phone: string): Promise<number>;
}
