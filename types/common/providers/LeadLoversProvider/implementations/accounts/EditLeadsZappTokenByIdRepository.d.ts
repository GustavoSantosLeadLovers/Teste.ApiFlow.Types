import { IEditLeadsZappTokenByIdRepository } from '../../models/accounts/IEditLeadsZappTokenByIdRepository';
export declare class EditLeadsZappTokenByIdRepository implements IEditLeadsZappTokenByIdRepository {
    edit(id: number, token: string | undefined, tokenExpiresIn: Date): Promise<void>;
}
