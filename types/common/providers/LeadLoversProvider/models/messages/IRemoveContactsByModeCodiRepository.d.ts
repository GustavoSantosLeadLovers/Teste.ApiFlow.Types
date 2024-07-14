export interface IRemoveContactsByModeCodiRepository {
    remove(modeCodi: number): Promise<void>;
}
