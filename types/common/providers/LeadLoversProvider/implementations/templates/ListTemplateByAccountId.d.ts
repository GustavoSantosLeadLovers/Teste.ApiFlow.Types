import { IListTemplateByAccountId, Template } from '../../models/templates/IListTemplateByAccountId';
export declare class ListTemplateByAccountId implements IListTemplateByAccountId {
    list(accountId: number): Promise<Template[]>;
}
