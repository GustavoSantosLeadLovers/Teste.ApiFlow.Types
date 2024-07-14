export type Group = {
    id: number;
    name: string;
};
export interface IListGroupRepository {
    list(groupId: number): Promise<Group | undefined>;
}
