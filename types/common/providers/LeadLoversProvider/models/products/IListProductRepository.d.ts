export type Product = {
    id: number;
    name: string;
};
export interface IListProductRepository {
    list(productId: number): Promise<Product | undefined>;
}
