import { IListCountWhatsAppAccountsUsingCreditsRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListCountWhatsAppAccountsUsingCreditsRepository';
import { IListWhatsAppCreditsPlanByUserIdRepository } from '../../../common/providers/LeadLoversProvider/models/plans/IListWhatsAppCreditsPlanByUserIdRepository';
export declare class HasWhatsAppCreditsService {
    private listWhatsAppCreditsPlanByUserIdRepository;
    private listCountWhatsAppAccountsUsingCreditsRepository;
    constructor(listWhatsAppCreditsPlanByUserIdRepository: IListWhatsAppCreditsPlanByUserIdRepository, listCountWhatsAppAccountsUsingCreditsRepository: IListCountWhatsAppAccountsUsingCreditsRepository);
    execute(userId: number): Promise<boolean>;
}
