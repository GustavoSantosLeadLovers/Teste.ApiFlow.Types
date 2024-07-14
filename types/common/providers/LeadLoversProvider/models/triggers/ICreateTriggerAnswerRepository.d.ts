export type TriggerAnswerCreate = {
    triggerId: number;
    modeCodi: number;
    answer: string;
    isAnyAnswer: boolean;
    anyAnswerActive: boolean;
};
export interface ICreateTriggerAnswerRepository {
    create(triggerAnswer: TriggerAnswerCreate): Promise<void>;
}
