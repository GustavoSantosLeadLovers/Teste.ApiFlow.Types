import { IListTemplateComponentsByTemplateIdRepository } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateComponentsByTemplateIdRepository';
export declare class ListTemplateTextService {
    private listTemplateComponentsByTemplateIdRepository;
    private content;
    constructor(listTemplateComponentsByTemplateIdRepository: IListTemplateComponentsByTemplateIdRepository);
    execute(templateId: number): Promise<string>;
    private addComponentsToContent;
    private isNullOrEmpty;
}
