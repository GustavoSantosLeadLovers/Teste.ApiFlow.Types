import { CreateTriggerEvent, ICreateTriggerEventRepository } from '../../models/triggers/ICreateTriggerEventRepository';
export declare class CreateTriggerEventRepository implements ICreateTriggerEventRepository {
    create(triggerEvent: CreateTriggerEvent): Promise<number>;
}
