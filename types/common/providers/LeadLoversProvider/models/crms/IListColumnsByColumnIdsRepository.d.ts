import { Column } from './IListColumnsRepository';
export interface IListColumnsByColumnIdsRepository {
    list(boardId: number, columnIds: number[]): Promise<Column[]>;
}
