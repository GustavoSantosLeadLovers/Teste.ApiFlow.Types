import { IListTriggerAnswerByAnswerRepository, TriggerAnswer } from '../../models/triggers/IListTriggerAnswerByAnswerRepository';
export declare class ListTriggerAnswerByAnswerRepository implements IListTriggerAnswerByAnswerRepository {
    validate(modeCodi: number, answer: string): Promise<TriggerAnswer | undefined>;
}
