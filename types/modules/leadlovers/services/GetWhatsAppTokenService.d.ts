import { IEditLeadsZappTokenByIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IEditLeadsZappTokenByIdRepository';
import { IListSlotByWhatsAppSlotIdRepository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListSlotByWhatsAppSlotIdRepository';
import { IListTokenQrCodeRespository } from '../../../common/providers/LeadLoversProvider/models/accounts/IListTokenQrCodeRespository';
export declare class GetWhatsAppTokenService {
    private listSlotByWhatsAppSlotIdRepository;
    private listTokenQrCodeRespository;
    private editLeadsZappTokenByIdRepository;
    constructor(listSlotByWhatsAppSlotIdRepository: IListSlotByWhatsAppSlotIdRepository, listTokenQrCodeRespository: IListTokenQrCodeRespository, editLeadsZappTokenByIdRepository: IEditLeadsZappTokenByIdRepository);
    execute(slotId: number): Promise<string>;
}
