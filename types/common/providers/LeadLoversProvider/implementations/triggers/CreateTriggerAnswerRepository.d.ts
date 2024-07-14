import { ICreateTriggerAnswerRepository, TriggerAnswerCreate } from '../../models/triggers/ICreateTriggerAnswerRepository';
export declare class CreateTriggerAnswerRepository implements ICreateTriggerAnswerRepository {
    create(triggerAnswer: TriggerAnswerCreate): Promise<void>;
}
