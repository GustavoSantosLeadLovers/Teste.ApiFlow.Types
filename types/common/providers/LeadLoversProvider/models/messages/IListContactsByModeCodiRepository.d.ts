export type Contact = {
    id: number;
    name: string;
    phone: string;
};
export interface IListContactsByModeCodiRepository {
    list(modeCodi: number): Promise<Contact[]>;
}
