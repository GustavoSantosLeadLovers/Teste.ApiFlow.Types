export type CreateWhatsAppModelLinkPreview = {
    usuaSistCodi: number;
    modeCodi: number;
    linkPreviewId: number;
};
export interface ICreateWhatsAppModelLinkPreviewRepository {
    create(linkPreview: CreateWhatsAppModelLinkPreview): Promise<void>;
}
