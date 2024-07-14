export type ActiveTask = {
    tareCodi: number;
};
export interface IListActiveTasksByModeCodisRepository {
    list(ids: number[]): Promise<ActiveTask[]>;
}
