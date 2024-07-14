import { IListWhatsAppMachinesRepository, Machine } from '../../models/machines/IListWhatsAppMachinesRepository';
export declare class ListWhatsAppMachinesRepository implements IListWhatsAppMachinesRepository {
    list(userId: number): Promise<Machine[]>;
}
