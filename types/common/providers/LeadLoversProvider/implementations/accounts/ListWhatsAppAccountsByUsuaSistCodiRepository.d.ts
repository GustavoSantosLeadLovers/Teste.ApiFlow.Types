import { IListWhatsAppAccountsByUsuaSistCodiRepository, WhatsAppAccount } from "../../models/accounts/IListWhatsAppAccountsByUsuaSistCodiRepository";
export declare class ListWhatsAppAccountsByUsuaSistCodiRepository implements IListWhatsAppAccountsByUsuaSistCodiRepository {
    list(usuaSistCodi: number, machineId: number): Promise<WhatsAppAccount[]>;
}
