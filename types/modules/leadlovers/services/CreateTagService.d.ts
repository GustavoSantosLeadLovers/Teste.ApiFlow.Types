import { ICreateTagRepository } from '../../../common/providers/LeadLoversProvider/models/tags/ICreateTagRepository';
export declare class CreateTagService {
    private createTagRepository;
    constructor(createTagRepository: ICreateTagRepository);
    execute(userId: number, tagName: string): Promise<number>;
}
