import { IListTriggersByIdsRepository, Trigger } from '../../models/triggers/IListTriggersByIdsRepository';
export declare class ListTriggersByIdsRepository implements IListTriggersByIdsRepository {
    list(ids: number[]): Promise<Trigger[]>;
}
