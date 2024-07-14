import { IListTagByNameRepository } from '../../models/tags/IListTagByNameRepository';
export declare class ListTagByNameRepository implements IListTagByNameRepository {
    list(userId: number, tagName: string): Promise<number>;
}
