export type Product = {
    id: number;
    name: string;
};
export interface IListProductsRepository {
    list(userId: number): Promise<Product[]>;
}
