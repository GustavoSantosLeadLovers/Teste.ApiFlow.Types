export type CreateContact = {
    usuaSistCodi: number;
    name: string;
    phone: string;
};
export interface ICreateContactRepository {
    create(contact: CreateContact): Promise<number>;
}
