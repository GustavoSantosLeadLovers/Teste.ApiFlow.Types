import { Column, IListColumnsRepository } from '../../models/crms/IListColumnsRepository';
export declare class ListColumnsRepository implements IListColumnsRepository {
    list(boardId: number): Promise<Column[]>;
}
