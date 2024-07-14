export interface IListColumnsAccessRepository {
    list(userId: number, boardId: number): Promise<number[]>;
}
