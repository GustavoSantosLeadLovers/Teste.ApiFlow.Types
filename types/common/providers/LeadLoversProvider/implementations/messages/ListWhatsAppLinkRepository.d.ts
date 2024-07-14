import { IListWhatsAppLinkRepository, Link } from '../../models/messages/IListWhatsAppLinkRepository';
export declare class ListWhatsAppLinkRepository implements IListWhatsAppLinkRepository {
    list(modeCodi: number, linkUrl: string, linkPreviewId: number): Promise<Link[]>;
}
