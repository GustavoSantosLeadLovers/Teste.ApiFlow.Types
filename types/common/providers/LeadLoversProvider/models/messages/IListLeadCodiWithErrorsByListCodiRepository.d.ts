export interface IListLeadCodiWithErrorsByListCodiRepository {
    list(listCodi: number, modeCodi: number, userId: number): Promise<number | undefined>;
}
