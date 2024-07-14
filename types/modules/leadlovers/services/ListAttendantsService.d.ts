import { Attendant, IListWhatsAppAttendantsRepository } from '../../../common/providers/LeadLoversProvider/models/attendants/IListWhatsAppAttendantsRepository';
export declare class ListAttendantsService {
    private listWhatsAppAttendantsRepository;
    constructor(listWhatsAppAttendantsRepository: IListWhatsAppAttendantsRepository);
    execute(userId: number): Promise<Attendant[]>;
}
