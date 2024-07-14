export interface IAlreadyExistsMachineRepository {
    verify(id: number, userId: number): Promise<boolean>;
}
