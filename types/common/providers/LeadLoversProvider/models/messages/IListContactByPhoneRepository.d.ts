export interface IListContactByPhoneRepository {
    list(usuaSistCodi: number, phone: string): Promise<number>;
}
