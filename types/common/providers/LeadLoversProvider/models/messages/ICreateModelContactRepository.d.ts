export type CreateModelContact = {
    usuaSistCodi: number;
    modeCodi: number;
    contactId: number;
};
export interface ICreateModelContactRepository {
    create(contact: CreateModelContact): Promise<void>;
}
