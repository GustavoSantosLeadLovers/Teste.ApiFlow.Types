import { IListWhatsAppAccountsByUsuaSistCodiRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountsByUsuaSistCodiRepository';
import { ListWhatsAppAccountsOutputDTO } from '../dtos/leadlovers.dto';
export declare class ListWhatsAppAccountsService {
    private listWhatsAppAccountsByUsuaSistCodiRepository;
    constructor(listWhatsAppAccountsByUsuaSistCodiRepository: IListWhatsAppAccountsByUsuaSistCodiRepository);
    execute(userId: number, flowId: string): Promise<ListWhatsAppAccountsOutputDTO>;
}
