import { Board, IListBoardsRepository } from '../../models/crms/IListBoardsRepository';
export declare class ListBoardsRepository implements IListBoardsRepository {
    list(userId: number): Promise<Board[]>;
}
