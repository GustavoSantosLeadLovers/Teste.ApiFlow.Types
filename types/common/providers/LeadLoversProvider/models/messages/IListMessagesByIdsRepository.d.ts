export type Message = {
    modeCodi: number;
};
export interface IListMessagesByIdsRepository {
    list(ids: number[]): Promise<Message[]>;
}
