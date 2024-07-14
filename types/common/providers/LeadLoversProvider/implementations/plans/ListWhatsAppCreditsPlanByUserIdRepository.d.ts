import { IListWhatsAppCreditsPlanByUserIdRepository } from '../../models/plans/IListWhatsAppCreditsPlanByUserIdRepository';
export declare class ListWhatsAppCreditsPlanByUserIdRepository implements IListWhatsAppCreditsPlanByUserIdRepository {
    list(userId: number): Promise<number>;
}
