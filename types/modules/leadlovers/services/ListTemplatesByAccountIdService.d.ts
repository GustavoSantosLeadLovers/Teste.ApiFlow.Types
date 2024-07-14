import { IListTemplateByAccountIdRepository, Template } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateByAccountIdRepository';
export declare class ListTemplatesByAccountIdService {
    private listTemplateByAccountIdRepository;
    constructor(listTemplateByAccountIdRepository: IListTemplateByAccountIdRepository);
    execute(accountId: number): Promise<Template[]>;
}
