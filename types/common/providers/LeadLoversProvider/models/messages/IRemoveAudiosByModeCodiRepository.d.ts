export interface IRemoveAudiosByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
