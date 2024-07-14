import { IListConditionalTriggerFiltersByTriggerIdRepository } from '../../../common/providers/LeadLoversProvider/models/triggers/IListConditionalTriggerFiltersByTriggerIdRepository';
type ConditionalTriggerFilter = {
    type: number;
    score: number;
    tagId: number;
    closeWindow: boolean;
    tagOperatorAnd: boolean;
};
export declare class GetConditionalTriggerFiltersService {
    private listConditionalTriggerFiltersByTriggerIdRepository;
    constructor(listConditionalTriggerFiltersByTriggerIdRepository: IListConditionalTriggerFiltersByTriggerIdRepository);
    execute(triggerId: number): Promise<ConditionalTriggerFilter[]>;
}
export {};
