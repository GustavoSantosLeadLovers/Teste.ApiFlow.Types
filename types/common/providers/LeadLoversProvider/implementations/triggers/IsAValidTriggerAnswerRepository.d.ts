import { IIsAValidTriggerAnswerRepository } from '../../models/triggers/IIsAValidTriggerAnswerRepository';
export declare class IsAValidTriggerAnswerRepository implements IIsAValidTriggerAnswerRepository {
    validate(modeCodi: number, answer: string): Promise<boolean>;
}
