import { CreateSessionDTO, SessionDTO } from '../dtos/session.dto';
import { ILeadLoversSSOProvider } from '../providers/LeadLoversSSO/models/ILeadLoversSSOProvider';
export declare class CreateSessionService {
    private leadloversSSOProvider;
    constructor(leadloversSSOProvider: ILeadLoversSSOProvider);
    execute({ token, refresh_token }: CreateSessionDTO): Promise<SessionDTO>;
}
