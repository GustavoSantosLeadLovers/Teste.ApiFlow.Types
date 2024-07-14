import { IListTagsRepository, Tag } from '../../../common/providers/LeadLoversProvider/models/tags/IListTagsRepository';
export declare class ListTagsService {
    private listTagsRepository;
    constructor(listTagsRepository: IListTagsRepository);
    execute(userId: number): Promise<Tag[]>;
}
