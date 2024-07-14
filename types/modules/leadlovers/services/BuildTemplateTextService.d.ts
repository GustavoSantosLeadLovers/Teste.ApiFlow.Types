import { Template } from '../../../common/providers/LeadLoversProvider/models/templates/IListTemplateByAccountIdRepository';
import { TemplateDTO } from '../dtos/leadlovers.dto';
export declare class BuildTemplateTextService {
    execute(templates: Template[]): TemplateDTO[];
    private addTextToContent;
    private isNullOrEmpty;
}
