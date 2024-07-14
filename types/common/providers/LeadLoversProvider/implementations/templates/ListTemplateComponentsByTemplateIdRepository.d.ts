import { IListTemplateComponentsByTemplateIdRepository, TemplateComponent } from '../../models/templates/IListTemplateComponentsByTemplateIdRepository';
export declare class ListTemplateComponentsByTemplateIdRepository implements IListTemplateComponentsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateComponent[]>;
}
