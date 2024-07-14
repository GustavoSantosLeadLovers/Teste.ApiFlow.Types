import { DynamicField, IListDynamicFieldsRepository } from '../../../common/providers/LeadLoversProvider/models/fields/IListDynamicFieldsRepository';
export declare class ListAllLeadFieldsService {
    private listDynamicFieldsRepository;
    constructor(listDynamicFieldsRepository: IListDynamicFieldsRepository);
    execute(userId: number): Promise<DynamicField[]>;
}
