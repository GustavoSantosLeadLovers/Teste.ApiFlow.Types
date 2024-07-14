export type Machine = {
    id: number;
    name: string;
    status: number;
    type: number;
};
export interface IListWhatsAppMachinesRepository {
    list(userId: number): Promise<Machine[]>;
}
