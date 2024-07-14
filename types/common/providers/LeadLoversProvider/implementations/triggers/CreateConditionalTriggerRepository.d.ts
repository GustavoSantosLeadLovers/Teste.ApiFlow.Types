import { ICreateConditionalTriggerRepository } from '../../models/triggers/ICreateConditionalTriggerRepository';
export declare class CreateConditionalTriggerRepository implements ICreateConditionalTriggerRepository {
    create(modelId: number, active: boolean): Promise<number>;
}
