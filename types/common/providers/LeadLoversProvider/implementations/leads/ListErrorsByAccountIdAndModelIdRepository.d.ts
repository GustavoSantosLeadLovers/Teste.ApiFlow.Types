import { IListErrorsByAccountIdAndModelIdRepository, LeadErrors } from '../../models/leads/IListErrorsByAccountIdAndModelIdRepository';
export declare class ListErrorsByAccountIdAndModelIdRepository implements IListErrorsByAccountIdAndModelIdRepository {
    list(usuaSistCodi: number, accountId: number, modelId: number): Promise<LeadErrors[]>;
}
