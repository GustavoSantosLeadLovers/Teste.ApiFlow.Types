import { IRemoveWhatsAppLinksListRepository } from '../../models/links/IRemoveWhatsAppLinksListRepository';
export declare class RemoveWhatsAppLinksListRepository implements IRemoveWhatsAppLinksListRepository {
    remove(funiCodi: number): Promise<void>;
}
