import { IListLinkPreviewByModeCodiRepository, LinkPreview } from '../../models/messages/IListLinkPreviewByModeCodiRepository';
export declare class ListLinkPreviewByModeCodiRepository implements IListLinkPreviewByModeCodiRepository {
    list(modeCodi: number): Promise<LinkPreview[]>;
}
