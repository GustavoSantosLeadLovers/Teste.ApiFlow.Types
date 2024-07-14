export type ConditionalTriggerFilter = {
    triggerId: number;
    type: number;
    score: number;
    scoreOperator: '=' | '<' | '>' | '';
    closeWindow: boolean;
    tagId: number;
    tagOperatorAnd: boolean;
};
export interface IListConditionalTriggerFiltersByTriggerIdRepository {
    list(triggerId: number): Promise<ConditionalTriggerFilter[]>;
}
