import { DynamicField, IListDynamicFieldsRepository } from '../../models/fields/IListDynamicFieldsRepository';
export declare class ListDynamicFieldsRepository implements IListDynamicFieldsRepository {
    list(userId: number): Promise<DynamicField[]>;
}
