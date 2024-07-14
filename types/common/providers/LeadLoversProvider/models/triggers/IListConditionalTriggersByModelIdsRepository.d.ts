import { ConditionalTrigger } from './IListConditionalTriggerByIdRepository';
export interface IListConditionalTriggersByModelIdsRepository {
    list(modelIds: number[]): Promise<ConditionalTrigger[]>;
}
