import { Audio, IListAudiosByModeCodiRepository } from '../../models/messages/IListAudiosByModeCodiRepository';
export declare class ListAudiosByModeCodiRepository implements IListAudiosByModeCodiRepository {
    list(modeCodi: number): Promise<Audio[]>;
}
