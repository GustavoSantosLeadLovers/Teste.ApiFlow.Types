import { Attendant, IListWhatsAppAttendantRepository } from '../../models/attendants/IListWhatsAppAttendantRepository';
export declare class ListWhatsAppAttendantRepository implements IListWhatsAppAttendantRepository {
    list(attendantId: number): Promise<Attendant | undefined>;
}
