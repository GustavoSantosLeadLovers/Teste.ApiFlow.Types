export type TriggerAnswer = {
    id: number;
};
export interface IListTriggerAnswerByAnswerRepository {
    validate(modeCodi: number, answer: string): Promise<TriggerAnswer | undefined>;
}
