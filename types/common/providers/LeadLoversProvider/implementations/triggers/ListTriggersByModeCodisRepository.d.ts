import { Trigger } from '../../models/triggers/IListTriggersByIdsRepository';
import { IListTriggersByModeCodisRepository } from '../../models/triggers/IListTriggersByModeCodisRepository';
export declare class ListTriggersByModeCodisRepository implements IListTriggersByModeCodisRepository {
    list(funiCodi: number, modeCodis: number[]): Promise<Trigger[]>;
}
