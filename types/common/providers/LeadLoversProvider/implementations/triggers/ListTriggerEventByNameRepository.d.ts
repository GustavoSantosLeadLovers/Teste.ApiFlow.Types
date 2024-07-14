import { IListTriggerEventIdByNameRepository } from '../../models/triggers/IListTriggerEventIdByNameRepository';
export declare class ListTriggerEventIdByNameRepository implements IListTriggerEventIdByNameRepository {
    list(name: string): Promise<number>;
}
