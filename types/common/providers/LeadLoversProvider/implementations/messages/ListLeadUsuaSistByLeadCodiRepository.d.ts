import { IListLeadUsuaSistByLeadCodiRepository } from '../../models/messages/IListLeadUsuaSistByLeadCodiRepository';
export declare class ListLeadUsuaSistByLeadCodiRepository implements IListLeadUsuaSistByLeadCodiRepository {
    list(leadCodi: number, user_id: number): Promise<number | undefined>;
}
