import { IEditWhatsAppAccountSetListCodiByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppAccountSetListCodiByIdRepository';
import { IEditWhatsAppAccountSetListCodiNullByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppAccountSetListCodiNullByListCodiRepository';
import { IListWhatsAppAccountByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountByIdRepository';
export declare class ChangeMachineIdLinkAccountService {
    private listWhatsAppAccountByIdRepository;
    private editWhatsAppAccountSetListCodiNullByListCodiRepository;
    private editWhatsAppAccountSetListCodiByIdRepository;
    constructor(listWhatsAppAccountByIdRepository: IListWhatsAppAccountByIdRepository, editWhatsAppAccountSetListCodiNullByListCodiRepository: IEditWhatsAppAccountSetListCodiNullByListCodiRepository, editWhatsAppAccountSetListCodiByIdRepository: IEditWhatsAppAccountSetListCodiByIdRepository);
    execute(machineId: number, accountId: number, userId: number): Promise<void>;
}
