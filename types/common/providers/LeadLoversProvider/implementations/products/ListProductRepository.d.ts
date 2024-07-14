import { IListProductRepository, Product } from '../../models/products/IListProductRepository';
export declare class ListProductRepository implements IListProductRepository {
    list(productId: number): Promise<Product | undefined>;
}
