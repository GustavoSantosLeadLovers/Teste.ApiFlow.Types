import { IListTemplateTagsByTemplateIdRepository, TemplateTag } from '../../models/templates/IListTemplateTagsByTemplateIdRepository';
export declare class ListTemplateTagsByTemplateIdRepository implements IListTemplateTagsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateTag[]>;
}
