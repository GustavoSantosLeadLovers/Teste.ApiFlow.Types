import { ICreateTagRepository } from '../../models/tags/ICreateTagRepository';
export declare class CreateTagRepository implements ICreateTagRepository {
    create(userId: number, tagName: string): Promise<number>;
}
