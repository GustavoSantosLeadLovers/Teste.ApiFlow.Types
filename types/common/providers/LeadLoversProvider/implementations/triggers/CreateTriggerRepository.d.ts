import { CreateTrigger, ICreateTriggerRepository } from '../../models/triggers/ICreateTriggerRepository';
export declare class CreateTriggerRepository implements ICreateTriggerRepository {
    create(trigger: CreateTrigger): Promise<number>;
}
