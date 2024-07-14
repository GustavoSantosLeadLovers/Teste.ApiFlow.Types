import { IListTriggerActionRepository } from '../../models/triggers/IListTriggerActionRepository';
export declare class ListTriggerActionRepository implements IListTriggerActionRepository {
    list(triggerActionId: number): Promise<number>;
}
