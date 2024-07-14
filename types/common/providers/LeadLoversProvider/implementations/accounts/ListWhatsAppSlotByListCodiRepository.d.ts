import { IListWhatsAppSlotByListCodiRepository, Slot } from '../../models/accounts/IListWhatsAppSlotByListCodiRepository';
export declare class ListWhatsAppSlotByListCodiRepository implements IListWhatsAppSlotByListCodiRepository {
    list(listCodi: number): Promise<Slot>;
}
