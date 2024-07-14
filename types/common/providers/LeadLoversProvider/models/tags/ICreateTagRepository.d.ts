export interface ICreateTagRepository {
    create(userId: number, tagName: string): Promise<number>;
}
