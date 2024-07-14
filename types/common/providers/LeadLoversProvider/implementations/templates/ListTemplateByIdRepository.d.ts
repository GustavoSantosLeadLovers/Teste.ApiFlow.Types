import { IListTemplateByIdRepository, Template } from '../../models/templates/IListTemplateByIdRepository';
export declare class ListTemplateByIdRepository implements IListTemplateByIdRepository {
    list(templateId: number): Promise<Template | undefined>;
}
