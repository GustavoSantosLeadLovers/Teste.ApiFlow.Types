import { IRemoveContactsByModeCodiRepository } from '../../models/messages/IRemoveContactsByModeCodiRepository';
export declare class RemoveContactsByModeCodiRepository implements IRemoveContactsByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
