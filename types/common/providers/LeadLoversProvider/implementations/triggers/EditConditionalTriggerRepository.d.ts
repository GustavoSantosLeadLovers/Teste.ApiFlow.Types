import { EditConditionalTrigger, IEditConditionalTriggerRepository } from '../../models/triggers/IEditConditionalTriggerRepository';
export declare class EditConditionalTriggerRepository implements IEditConditionalTriggerRepository {
    edit(trigger: EditConditionalTrigger): Promise<void>;
}
