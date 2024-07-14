import { IListTriggerActionsByTriggerIdRepository, TriggerAction } from '../../models/triggers/IListTriggerActionsByTriggerIdRepository';
export declare class ListTriggerActionsByTriggerIdRepository implements IListTriggerActionsByTriggerIdRepository {
    list(triggerId: number): Promise<TriggerAction[]>;
}
