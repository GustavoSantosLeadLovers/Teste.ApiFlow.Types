import { IListColumnsByColumnIdsRepository } from '../../models/crms/IListColumnsByColumnIdsRepository';
import { Column } from '../../models/crms/IListColumnsRepository';
export declare class ListColumnsByColumnIdsRepository implements IListColumnsByColumnIdsRepository {
    list(boardId: number, columnIds: number[]): Promise<Column[]>;
}
