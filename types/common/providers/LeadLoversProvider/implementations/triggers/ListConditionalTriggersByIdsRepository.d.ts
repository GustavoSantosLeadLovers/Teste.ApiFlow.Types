import { ConditionalTrigger } from '../../models/triggers/IListConditionalTriggerByIdRepository';
import { IListConditionalTriggersByModelIdsRepository } from '../../models/triggers/IListConditionalTriggersByModelIdsRepository';
export declare class ListConditionalTriggersByModelIdsRepository implements IListConditionalTriggersByModelIdsRepository {
    list(modelIds: number[]): Promise<ConditionalTrigger[]>;
}
