export type MessageById = {
    modeCodi: number;
};
export interface IListActiveMessagesByIdsRepository {
    list(ids: number[]): Promise<MessageById[]>;
}
