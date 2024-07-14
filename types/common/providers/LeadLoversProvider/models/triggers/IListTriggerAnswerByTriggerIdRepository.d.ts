export type TriggerAnswer = {
    triggerId: number;
    modeCodi: number;
    answer: string;
};
export interface IListTriggerAnswerByTriggerIdRepository {
    list(triggerId: number): Promise<TriggerAnswer | undefined>;
}
