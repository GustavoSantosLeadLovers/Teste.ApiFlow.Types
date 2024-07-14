import { IListTriggerActionTypeByNameRepository } from '../../models/triggers/IListTriggerActionTypeByNameRepository';
export declare class ListTriggerActionTypeByNameRepository implements IListTriggerActionTypeByNameRepository {
    list(name: string): Promise<number>;
}
