import { Trigger } from './IListTriggersByIdsRepository';
export interface IListTriggersByModeCodisRepository {
    list(funiCodi: number, modeCodis: number[]): Promise<Trigger[]>;
}
