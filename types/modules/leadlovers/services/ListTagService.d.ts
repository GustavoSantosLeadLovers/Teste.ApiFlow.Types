import { IListTagByNameRepository } from '../../../common/providers/LeadLoversProvider/models/tags/IListTagByNameRepository';
export declare class ListTagService {
    private listTagByNameRepository;
    constructor(listTagByNameRepository: IListTagByNameRepository);
    execute(userId: number, tagName: string): Promise<number>;
}
