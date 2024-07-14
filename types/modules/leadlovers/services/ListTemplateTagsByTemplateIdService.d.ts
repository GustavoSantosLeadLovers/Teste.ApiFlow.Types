import { IListTemplateTagsByTemplateIdRepository, TemplateTag } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateTagsByTemplateIdRepository';
export declare class ListTemplateTagsByTemplateIdService {
    private listTemplateTagsByTemplateIdRepository;
    constructor(listTemplateTagsByTemplateIdRepository: IListTemplateTagsByTemplateIdRepository);
    execute(templateId: number): Promise<TemplateTag[]>;
}
