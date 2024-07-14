export interface IIsThisAnswerAlreadyInUseRepository {
    validate(modeCodi: number, answer: string): Promise<boolean>;
}
