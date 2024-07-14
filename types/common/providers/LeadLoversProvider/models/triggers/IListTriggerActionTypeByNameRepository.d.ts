export interface IListTriggerActionTypeByNameRepository {
    list(name: string): Promise<number>;
}
