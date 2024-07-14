export interface IEditLeadsZappTokenByIdRepository {
    edit(id: number, token: string, tokenExpiresIn: Date): Promise<void>;
}
