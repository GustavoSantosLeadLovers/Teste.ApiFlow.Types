import { IListTemplateByAccountIdRepository, Template } from '../../models/templates/IListTemplateByAccountIdRepository';
export declare class ListTemplateByAccountIdRepository implements IListTemplateByAccountIdRepository {
    list(accountId: number): Promise<Template[]>;
}
