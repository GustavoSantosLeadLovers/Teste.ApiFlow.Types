import { IListErrorsByAccountIdAndModelIdRepository, LeadErrors } from '../../../common/providers/LeadLoversProvider/models/leads/IListErrorsByAccountIdAndModelIdRepository';
export declare class ListErrorsByAccountIdAndModelIdService {
    private listErrorsByAccountIdAndModelIdRepository;
    constructor(listErrorsByAccountIdAndModelIdRepository: IListErrorsByAccountIdAndModelIdRepository);
    execute(userId: number, accountId: number, modeCodi: number): Promise<LeadErrors[]>;
}
