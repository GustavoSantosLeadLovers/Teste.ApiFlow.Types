export interface IListLeadUsuaSistByLeadCodiRepository {
    list(leadCodi: number, user_id: number): Promise<number | undefined>;
}
