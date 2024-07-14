import { EditTriggerAction, IEditTriggerActionRepository } from '../../models/triggers/IEditTriggerActionRepository';
export declare class EditTriggerActionRepository implements IEditTriggerActionRepository {
    edit(action: EditTriggerAction): Promise<void>;
}
