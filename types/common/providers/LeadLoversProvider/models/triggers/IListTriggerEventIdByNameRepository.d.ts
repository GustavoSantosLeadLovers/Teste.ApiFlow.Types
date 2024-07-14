export interface IListTriggerEventIdByNameRepository {
    list(name: string): Promise<number>;
}
