import { Group, IListGroupsRepository } from '../../models/crms/IListGroupsRepository';
export declare class ListGroupsRepository implements IListGroupsRepository {
    list(userId: number): Promise<Group[]>;
}
