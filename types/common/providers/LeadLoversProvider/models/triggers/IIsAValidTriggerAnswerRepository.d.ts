export interface IIsAValidTriggerAnswerRepository {
    validate(modeCodi: number, answer: string): Promise<boolean>;
}
