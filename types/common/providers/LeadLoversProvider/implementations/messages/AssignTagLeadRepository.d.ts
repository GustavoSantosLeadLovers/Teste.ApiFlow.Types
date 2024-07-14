import { AssignTag, IAssignTagLeadRepository } from '../../models/messages/IAssignTagLeadRepository';
export declare class AssignTagLeadRepository implements IAssignTagLeadRepository {
    create(data: AssignTag): Promise<void>;
}
