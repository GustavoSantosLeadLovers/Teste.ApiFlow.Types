import { IRemoveLinkPreviewByModeCodiRepository } from '../../models/messages/IRemoveLinkPreviewByModeCodiRepository';
export declare class RemoveLinkPreviewByModeCodiRepository implements IRemoveLinkPreviewByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
