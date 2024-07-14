export interface IEditWhatsAppAccountSetListCodiByIdRepository {
    edit(listCodi: number, accountId: number): Promise<void>;
}
