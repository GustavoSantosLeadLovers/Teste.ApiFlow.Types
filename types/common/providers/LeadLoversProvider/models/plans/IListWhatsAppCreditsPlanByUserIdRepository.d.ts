export interface IListWhatsAppCreditsPlanByUserIdRepository {
    list(userId: number): Promise<number>;
}
