import { IListNamesByBoardAndColumnRepository, Names } from '../../models/crms/IListNamesByBoardAndColumnRepository';
export declare class ListNamesByBoardAndColumnRepository implements IListNamesByBoardAndColumnRepository {
    list(boardId: number, columnId: number): Promise<Names | undefined>;
}
