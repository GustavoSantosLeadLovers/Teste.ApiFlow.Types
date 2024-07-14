import { IEditListLeadRepository } from '../../models/messages/IEditListLeadRepository';
export declare class EditListLeadRepository implements IEditListLeadRepository {
    edit(listCodi: number, funiCodi: number, sequenceNumber: number, timeInSeconds: number): Promise<void>;
}
