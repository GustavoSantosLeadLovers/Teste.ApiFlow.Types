export type Column = {
    id: number;
    name: string;
};
export interface IListColumnsRepository {
    list(boardId: number): Promise<Column[]>;
}
