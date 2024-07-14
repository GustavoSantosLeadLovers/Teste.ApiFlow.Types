export type Names = {
    boardName: string;
    columnName: string;
};
export interface IListNamesByBoardAndColumnRepository {
    list(boardId: number, columnId: number): Promise<Names | undefined>;
}
