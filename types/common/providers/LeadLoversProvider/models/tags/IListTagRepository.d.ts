export type Tag = {
    id: number;
    name: string;
};
export interface IListTagRepository {
    list(tagId: number): Promise<Tag | undefined>;
}
