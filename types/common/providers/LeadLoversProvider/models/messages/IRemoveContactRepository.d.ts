export interface IRemoveContactRepository {
    remove(usuaSistCodi: number, id: number): Promise<void>;
}
