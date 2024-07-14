import { ActiveTask, IListActiveTasksByModeCodisRepository } from '../../models/messages/IListActiveTasksByModeCodisRepository';
export declare class ListActiveTasksByModeCodisRepository implements IListActiveTasksByModeCodisRepository {
    list(ids: number[]): Promise<ActiveTask[]>;
}
