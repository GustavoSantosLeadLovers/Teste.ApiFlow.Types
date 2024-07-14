import { EditTrigger, IEditTriggerRepository } from '../../models/triggers/IEditTriggerRepository';
export declare class EditTriggerRepository implements IEditTriggerRepository {
    edit(trigger: EditTrigger): Promise<void>;
}
