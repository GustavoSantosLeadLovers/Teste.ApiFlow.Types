import { IRemoveListFuniCateListRepository } from '../../models/funnels/IRemoveListFuniCateListRepository';
export declare class RemoveListFuniCateListRepository implements IRemoveListFuniCateListRepository {
    remove(funiCodi: number): Promise<void>;
}
