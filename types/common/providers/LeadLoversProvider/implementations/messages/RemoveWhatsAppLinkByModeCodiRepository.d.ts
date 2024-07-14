import { IRemoveWhatsAppLinkByModeCodiRepository } from '../../models/messages/IRemoveWhatsAppLinkByModeCodiRepository';
export declare class RemoveWhatsAppLinkByModeCodiRepository implements IRemoveWhatsAppLinkByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
