import { IListColumnsAccessRepository } from '../../models/crms/IListColumnsAccessRepository';
export declare class ListColumnsAccessRepository implements IListColumnsAccessRepository {
    list(userId: number, boardId: number): Promise<number[]>;
}
