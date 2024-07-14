export interface IListActionTotalLeadCodiWithErrorsByListCodiRepository {
    list(machineId: number, modeCodi: number, userId: number): Promise<number | undefined>;
}
