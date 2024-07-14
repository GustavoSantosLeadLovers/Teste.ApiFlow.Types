import { Group, IListGroupRepository } from '../../models/crms/IListGroupRepository';
export declare class ListGroupRepository implements IListGroupRepository {
    list(groupId: number): Promise<Group | undefined>;
}
