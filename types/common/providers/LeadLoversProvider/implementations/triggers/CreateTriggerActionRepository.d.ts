import { CreateTriggerAction, ICreateTriggerActionRepository } from '../../models/triggers/ICreateTriggerActionRepository';
export declare class CreateTriggerActionRepository implements ICreateTriggerActionRepository {
    create(action: CreateTriggerAction): Promise<number>;
}
