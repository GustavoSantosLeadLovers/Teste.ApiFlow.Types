import { IRemoveAudiosByModeCodiRepository } from '../../models/messages/IRemoveAudiosByModeCodiRepository';
export declare class RemoveAudiosByModeCodiRepository implements IRemoveAudiosByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
