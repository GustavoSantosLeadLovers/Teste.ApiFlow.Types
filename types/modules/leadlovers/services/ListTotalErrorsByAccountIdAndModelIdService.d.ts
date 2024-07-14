import { IListTotalErrorsByAccountIdAndModelIdRepository } from '../../../common/providers/LeadLoversProvider/models/leads/IListTotalErrorsByAccountIdAndModelIdRepository';
export declare class ListTotalErrorsByAccountIdAndModelIdService {
    private listTotalErrorsByAccountIdAndModelIdRepository;
    constructor(listTotalErrorsByAccountIdAndModelIdRepository: IListTotalErrorsByAccountIdAndModelIdRepository);
    execute(userId: number, accountId: number, modeCodi: number): Promise<number>;
}
