import { CreateConditionalTriggerAction, ICreateConditionalTriggerActionRepository } from '../../models/triggers/ICreateConditionalTriggerActionRepository';
export declare class CreateConditionalTriggerActionRepository implements ICreateConditionalTriggerActionRepository {
    create(action: CreateConditionalTriggerAction): Promise<number>;
}
