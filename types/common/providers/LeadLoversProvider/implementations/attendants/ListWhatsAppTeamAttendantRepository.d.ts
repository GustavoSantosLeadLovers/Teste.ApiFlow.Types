import { IListWhatsAppTeamAttendantRepository, TeamAttendant } from '../../models/attendants/IListWhatsAppTeamAttendantRepository';
export declare class ListWhatsAppTeamAttendantRepository implements IListWhatsAppTeamAttendantRepository {
    list(attendantId: number): Promise<TeamAttendant | undefined>;
}
