import { IListTotalErrorsByAccountIdAndModelIdRepository } from '../../models/leads/IListTotalErrorsByAccountIdAndModelIdRepository';
export declare class ListTotalErrorsByAccountIdAndModelIdRepository implements IListTotalErrorsByAccountIdAndModelIdRepository {
    list(usuaSistCodi: number, accountId: number, modelId: number): Promise<number>;
}
