import { IListTemplateButtonsByTemplateIdRepository } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateButtonsByTemplateIdRepository';
import { IListTemplateComponentsByTemplateIdRepository } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateComponentsByTemplateIdRepository';
type buttons = {
    id: string;
    text: string;
    url: string;
};
export declare class BuildTemplateContentMessageService {
    private listTemplateComponentsByTemplateIdRepository;
    private listTemplateButtonsByTemplateIdRepository;
    private content;
    private hasAttachments?;
    constructor(listTemplateComponentsByTemplateIdRepository: IListTemplateComponentsByTemplateIdRepository, listTemplateButtonsByTemplateIdRepository: IListTemplateButtonsByTemplateIdRepository);
    execute(templateId: number, replaceWithDefaultTags?: boolean): Promise<{
        html: string;
        buttons: buttons[];
        hasAttachments?: 'video' | 'image' | 'document';
    }>;
    private addComponentsToContent;
    private addButtonsToContent;
    private highlightTags;
    private isNullOrEmpty;
}
export {};
