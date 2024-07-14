export type DynamicField = {
    id: number;
    name: string;
};
export interface IListDynamicFieldsRepository {
    list(userId: number): Promise<DynamicField[]>;
}
