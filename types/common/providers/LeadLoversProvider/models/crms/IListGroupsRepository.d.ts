export type Group = {
    id: number;
    name: string;
};
export interface IListGroupsRepository {
    list(userId: number): Promise<Group[]>;
}
