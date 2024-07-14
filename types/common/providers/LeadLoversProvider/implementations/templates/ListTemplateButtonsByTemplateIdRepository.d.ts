import { IListTemplateButtonsByTemplateIdRepository, TemplateButton } from '../../models/templates/IListTemplateButtonsByTemplateIdRepository';
export declare class ListTemplateButtonsByTemplateIdRepository implements IListTemplateButtonsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateButton[]>;
}
