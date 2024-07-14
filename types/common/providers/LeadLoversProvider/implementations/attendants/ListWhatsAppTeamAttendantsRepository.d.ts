import { IListWhatsAppTeamAttendantsRepository, TeamAttendants } from '../../models/attendants/IListWhatsAppTeamAttendantsRepository';
export declare class ListWhatsAppTeamAttendantsRepository implements IListWhatsAppTeamAttendantsRepository {
    list(userId: number): Promise<TeamAttendants[]>;
}
