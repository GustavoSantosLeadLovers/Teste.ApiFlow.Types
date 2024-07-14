export type Board = {
    id: number;
    name: string;
};
export interface IListBoardsRepository {
    list(userId: number): Promise<Board[]>;
}
