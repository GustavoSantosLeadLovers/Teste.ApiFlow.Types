import { IListLimbroTriggerByFuniCodiRepository, LimbroTrigger } from '../../models/triggers/IListLimbroTriggerByFuniCodiRepository';
export declare class ListLimbroTriggerByFuniCodiRepository implements IListLimbroTriggerByFuniCodiRepository {
    list(funiCodi: number): Promise<LimbroTrigger>;
}
