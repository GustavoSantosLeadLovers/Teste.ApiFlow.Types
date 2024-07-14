import { IListTriggerAnswerByTriggerIdRepository, TriggerAnswer } from '../../models/triggers/IListTriggerAnswerByTriggerIdRepository';
export declare class ListTriggerAnswerByTriggerIdRepository implements IListTriggerAnswerByTriggerIdRepository {
    list(triggerId: number): Promise<TriggerAnswer | undefined>;
}
