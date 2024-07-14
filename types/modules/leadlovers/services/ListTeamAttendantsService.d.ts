import { IListWhatsAppTeamAttendantsRepository, TeamAttendants } from '../../../common/providers/LeadLoversProvider/models/attendants/IListWhatsAppTeamAttendantsRepository';
export declare class ListTeamAttendantsService {
    private listWhatsAppTeamAttendantsRepository;
    constructor(listWhatsAppTeamAttendantsRepository: IListWhatsAppTeamAttendantsRepository);
    execute(userId: number): Promise<TeamAttendants[]>;
}
