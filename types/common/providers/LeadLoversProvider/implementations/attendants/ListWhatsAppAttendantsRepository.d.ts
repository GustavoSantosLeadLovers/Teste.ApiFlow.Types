import { Attendant, IListWhatsAppAttendantsRepository } from '../../models/attendants/IListWhatsAppAttendantsRepository';
export declare class ListWhatsAppAttendantsRepository implements IListWhatsAppAttendantsRepository {
    list(userId: number): Promise<Attendant[]>;
}
