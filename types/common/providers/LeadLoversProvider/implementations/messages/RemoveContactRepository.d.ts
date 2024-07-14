import { IRemoveContactRepository } from '../../models/messages/IRemoveContactRepository';
export declare class RemoveContactRepository implements IRemoveContactRepository {
    remove(usuaSistCodi: number, id: number): Promise<void>;
}
