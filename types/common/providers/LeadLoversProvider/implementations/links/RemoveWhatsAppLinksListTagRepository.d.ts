import { IRemoveWhatsAppLinksListTagRepository } from '../../models/links/IRemoveWhatsAppLinksListTagRepository';
export declare class RemoveWhatsAppLinksListTagRepository implements IRemoveWhatsAppLinksListTagRepository {
    remove(funiCodi: number): Promise<void>;
}
