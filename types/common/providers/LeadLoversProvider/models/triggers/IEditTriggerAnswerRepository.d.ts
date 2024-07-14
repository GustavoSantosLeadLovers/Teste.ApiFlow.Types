export type TriggerAnswerEdit = {
    id: number;
    answer: string;
    isAnyAnswer: boolean;
};
export interface IEditTriggerAnswerRepository {
    edit(triggerAnswer: TriggerAnswerEdit): Promise<void>;
}
