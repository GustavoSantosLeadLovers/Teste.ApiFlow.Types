import { CreateWhatsAppLink, ICreateWhatsAppLinkRepository } from '../../models/messages/ICreateWhatsAppLinkRepository';
export declare class CreateWhatsAppLinkRepository implements ICreateWhatsAppLinkRepository {
    create(data: CreateWhatsAppLink): Promise<void>;
}
