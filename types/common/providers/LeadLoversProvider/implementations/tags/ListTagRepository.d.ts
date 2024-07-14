import { IListTagRepository, Tag } from '../../models/tags/IListTagRepository';
export declare class ListTagRepository implements IListTagRepository {
    list(tagId: number): Promise<Tag | undefined>;
}
