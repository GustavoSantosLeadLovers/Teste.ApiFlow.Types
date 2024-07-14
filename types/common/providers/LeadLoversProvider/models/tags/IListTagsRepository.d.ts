export type Tag = {
    id: number;
    name: string;
};
export interface IListTagsRepository {
    list(userId: number): Promise<Tag[]>;
}
