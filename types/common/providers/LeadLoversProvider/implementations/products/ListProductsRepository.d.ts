import { IListProductsRepository, Product } from '../../models/products/IListProductsRepository';
export declare class ListProductsRepository implements IListProductsRepository {
    list(userId: number): Promise<Product[]>;
}
