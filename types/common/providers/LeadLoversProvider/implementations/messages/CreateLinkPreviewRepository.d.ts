import { CreateLinkPreview, ICreateLinkPreviewRepository } from '../../models/messages/ICreateLinkPreviewRepository';
export declare class CreateLinkPreviewRepository implements ICreateLinkPreviewRepository {
    create(linkPreview: CreateLinkPreview): Promise<number>;
}
