export type CreateWhatsAppLink = {
    modeCodi: number;
    newId: string;
    url: string;
    linkPreviewId: number;
};
export interface ICreateWhatsAppLinkRepository {
    create(data: CreateWhatsAppLink): Promise<void>;
}
