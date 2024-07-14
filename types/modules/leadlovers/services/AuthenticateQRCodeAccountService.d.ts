import { IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository';
import { IStartInstanceFromWhatsAppAccountRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IStartInstanceFromWhatsAppAccountRepository';
export declare class AuthenticateQRCodeAccountService {
    private listWhatsAppAccountAndWhatsAppSlotByAccountIdRepository;
    private startInstanceFromWhatsAppAccountRepository;
    constructor(listWhatsAppAccountAndWhatsAppSlotByAccountIdRepository: IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository, startInstanceFromWhatsAppAccountRepository: IStartInstanceFromWhatsAppAccountRepository);
    execute(accountId: number, userId: number): Promise<string>;
}
