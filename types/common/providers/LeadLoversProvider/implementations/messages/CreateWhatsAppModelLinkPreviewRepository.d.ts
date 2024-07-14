import { CreateWhatsAppModelLinkPreview, ICreateWhatsAppModelLinkPreviewRepository } from '../../models/messages/ICreateWhatsAppModelLinkPreviewRepository';
export declare class CreateWhatsAppModelLinkPreviewRepository implements ICreateWhatsAppModelLinkPreviewRepository {
    create(linkPreview: CreateWhatsAppModelLinkPreview): Promise<void>;
}
