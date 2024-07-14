import { IListProductsRepository, Product } from '../../../common/providers/LeadLoversProvider/models/products/IListProductsRepository';
export declare class ListProductsService {
    private listProductsRepository;
    constructor(listProductsRepository: IListProductsRepository);
    execute(userId: number): Promise<Product[]>;
}
