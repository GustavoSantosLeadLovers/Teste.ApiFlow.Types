export interface IListTagByNameRepository {
    list(userId: number, tagName: string): Promise<number>;
}
