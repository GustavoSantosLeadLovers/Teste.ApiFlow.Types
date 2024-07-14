import { Account, IListWhatsAppAccountByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountByListCodiRepository';
export declare class ListAccountByMachineIdService {
    private listWhatsAppAccountByListCodiRepository;
    constructor(listWhatsAppAccountByListCodiRepository: IListWhatsAppAccountByListCodiRepository);
    execute(machineId: number): Promise<Account>;
}
