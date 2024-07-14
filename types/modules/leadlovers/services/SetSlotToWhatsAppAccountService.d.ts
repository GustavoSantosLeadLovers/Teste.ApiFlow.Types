import { IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository';
import { IClearCloudApiConfigWhatsAppAccountByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IClearCloudApiConfigWhatsAppAccountByIdRepository';
import { IListLeadsZappSlotPreferenceByUserIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListLeadsZappSlotPreferenceByUserIdRepository';
import { ICreateEmailSequenceNotificationErrorRepository } from '../../../common/providers/LeadLoversProvider/models/emailSequence/ICreateEmailSequenceNotificationErrorRepository';
import { IListSlotByWhatsAppSlotIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListSlotByWhatsAppSlotIdRepository';
import { IEditWhatsAppSlotUsuaSistPreferenceByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppSlotUsuaSistPreferenceByIdRepository';
import { IEditWhatsAppAccountSetSlotIdByAccountIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditWhatsAppAccountSetSlotIdByAccountIdRepository';
export declare class SetSlotToWhatsAppAccountService {
    private clearCloudApiConfigWhatsAppAccountByIdRepository;
    private listWhatsAppAccountAndWhatsAppSlotByAccountIdRepository;
    private listLeadsZappSlotPreferenceByUserIdRepository;
    private createEmailSequenceNotificationErrorRepository;
    private listSlotByWhatsAppSlotIdRepository;
    private editWhatsAppSlotUsuaSistPreferenceByIdRepository;
    private editWhatsAppAccountSetSlotIdByAccountIdRepository;
    constructor(clearCloudApiConfigWhatsAppAccountByIdRepository: IClearCloudApiConfigWhatsAppAccountByIdRepository, listWhatsAppAccountAndWhatsAppSlotByAccountIdRepository: IListWhatsAppAccountAndWhatsAppSlotByAccountIdRepository, listLeadsZappSlotPreferenceByUserIdRepository: IListLeadsZappSlotPreferenceByUserIdRepository, createEmailSequenceNotificationErrorRepository: ICreateEmailSequenceNotificationErrorRepository, listSlotByWhatsAppSlotIdRepository: IListSlotByWhatsAppSlotIdRepository, editWhatsAppSlotUsuaSistPreferenceByIdRepository: IEditWhatsAppSlotUsuaSistPreferenceByIdRepository, editWhatsAppAccountSetSlotIdByAccountIdRepository: IEditWhatsAppAccountSetSlotIdByAccountIdRepository);
    execute(accountId: number, userId: number): Promise<void>;
}
