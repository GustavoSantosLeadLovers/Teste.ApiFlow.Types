import { IRemoveMessagesByFuniCodiRepository } from '../../models/messages/IRemoveMessagesByFuniCodiRepository';
export declare class RemoveMessagesByFuniCodiRepository implements IRemoveMessagesByFuniCodiRepository {
    remove(funiCodi: number): Promise<void>;
}
