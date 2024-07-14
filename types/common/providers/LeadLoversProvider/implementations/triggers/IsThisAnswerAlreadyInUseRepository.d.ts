import { IIsThisAnswerAlreadyInUseRepository } from '../../models/triggers/IIsThisAnswerAlreadyInUseRepository';
export declare class IsThisAnswerAlreadyInUseRepository implements IIsThisAnswerAlreadyInUseRepository {
    validate(modeCodi: number, answer: string): Promise<boolean>;
}
