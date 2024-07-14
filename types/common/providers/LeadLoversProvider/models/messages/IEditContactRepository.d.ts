export type EditContact = {
    usuaSistCodi: number;
    id: number;
    name: string;
    phone: string;
};
export interface IEditContactRepository {
    edit(contact: EditContact): Promise<void>;
}
