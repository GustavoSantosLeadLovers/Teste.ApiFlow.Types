export type Link = {
    id: number;
    modeCodi: number;
    url: string;
    linkPreviewId: number;
};
export interface IListWhatsAppLinkRepository {
    list(modeCodi: number, linkUrl: string, linkPreviewId: number): Promise<Link[]>;
}
