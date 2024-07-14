export type LinkPreview = {
    id: number;
    linkId: string;
    userId: number;
    title: string;
    description: string;
    body: string;
    link: string;
};
export interface IListLinkPreviewByModeCodiRepository {
    list(modeCodi: number): Promise<LinkPreview[]>;
}
