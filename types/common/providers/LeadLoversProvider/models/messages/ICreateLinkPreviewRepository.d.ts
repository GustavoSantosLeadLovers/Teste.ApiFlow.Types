export type CreateLinkPreview = {
    linkId: string;
    usuaSistCodi: number;
    title: string;
    description: string;
    body: string;
    link: string;
};
export interface ICreateLinkPreviewRepository {
    create(linkPreview: CreateLinkPreview): Promise<number>;
}
