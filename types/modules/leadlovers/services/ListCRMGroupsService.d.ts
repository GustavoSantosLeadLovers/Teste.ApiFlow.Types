import { Group, IListGroupsRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListGroupsRepository';
export declare class ListCRMGroupsService {
    private listGroupsRepository;
    constructor(listGroupsRepository: IListGroupsRepository);
    execute(userId: number): Promise<Group[]>;
}
