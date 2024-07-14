import { IEditTriggerAnswerRepository, TriggerAnswerEdit } from '../../models/triggers/IEditTriggerAnswerRepository';
export declare class EditTriggerAnswerRepository implements IEditTriggerAnswerRepository {
    edit(triggerAnswer: TriggerAnswerEdit): Promise<void>;
}
