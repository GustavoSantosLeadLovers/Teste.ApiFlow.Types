import { IRemoveAllTriggerAnswerRepository } from '../../models/triggers/IRemoveAllTriggerAnswerRepository';
export declare class RemoveAllTriggerAnswerRepository implements IRemoveAllTriggerAnswerRepository {
    remove(triggerId: number): Promise<void>;
}
