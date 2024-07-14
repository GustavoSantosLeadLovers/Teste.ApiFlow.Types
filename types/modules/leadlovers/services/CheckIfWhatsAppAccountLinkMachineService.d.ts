import { IListWhatsAppAccountByIdAndNotInListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountByIdAndNotInListCodiRepository';
import { IListWhatsAppAccountByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountByIdRepository';
export declare class CheckWhatsAppAccountLinkMachineService {
    private listWhatsAppAccountByIdRepository;
    private listWhatsAppAccountByIdAndNotInListCodiRepository;
    constructor(listWhatsAppAccountByIdRepository: IListWhatsAppAccountByIdRepository, listWhatsAppAccountByIdAndNotInListCodiRepository: IListWhatsAppAccountByIdAndNotInListCodiRepository);
    execute(machineId: number, accountId: number, userId: number): Promise<boolean | string>;
}
