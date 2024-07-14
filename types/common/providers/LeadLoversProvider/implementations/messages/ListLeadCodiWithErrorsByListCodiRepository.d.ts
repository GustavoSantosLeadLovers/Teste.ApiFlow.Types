import { IListLeadCodiWithErrorsByListCodiRepository } from '../../models/messages/IListLeadCodiWithErrorsByListCodiRepository';
export declare class ListLeadCodiWithErrorsByListCodiRepository implements IListLeadCodiWithErrorsByListCodiRepository {
    list(listCodi: number, modeCodi: number, userId: number): Promise<any | undefined>;
}
