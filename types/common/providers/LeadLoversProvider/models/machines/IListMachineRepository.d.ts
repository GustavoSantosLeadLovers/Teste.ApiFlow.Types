export type Machine = {
    id: number;
    userId: number;
    userName: string;
};
export interface IListMachineRepository {
    list(listCodi: number): Promise<Machine | undefined>;
}
