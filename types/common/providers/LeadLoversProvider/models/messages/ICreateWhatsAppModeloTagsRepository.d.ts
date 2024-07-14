export type TagCreate = {
    modeCodi: number;
    tagId: number;
    name: string;
    value: string;
};
export interface ICreateWhatsAppModeloTagsRepository {
    create(tag: TagCreate): Promise<void>;
}
