import { IListTagsRepository, Tag } from '../../models/tags/IListTagsRepository';
export declare class ListTagsRepository implements IListTagsRepository {
    list(userId: number): Promise<Tag[]>;
}
