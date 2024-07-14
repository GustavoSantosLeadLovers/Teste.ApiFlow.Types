export interface IListMessageSequenceNumberRepository {
    list(modeCodi: number): Promise<number>;
}
