export type CreateConditionalTriggerFilter = {
    triggerId: number;
    type: number;
    score: number;
    scoreOperator: '=' | '<' | '>' | '';
    closeWindow: boolean;
    tagId: number;
    tagOperatorAnd: boolean;
};
export interface ICreateConditionalTriggerFilterRepository {
    create(filter: CreateConditionalTriggerFilter): Promise<void>;
}
