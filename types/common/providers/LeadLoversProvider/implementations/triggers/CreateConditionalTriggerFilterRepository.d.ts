import { CreateConditionalTriggerFilter, ICreateConditionalTriggerFilterRepository } from '../../models/triggers/ICreateConditionalTriggerFilterRepository';
export declare class CreateConditionalTriggerFilterRepository implements ICreateConditionalTriggerFilterRepository {
    create(filter: CreateConditionalTriggerFilter): Promise<void>;
}
