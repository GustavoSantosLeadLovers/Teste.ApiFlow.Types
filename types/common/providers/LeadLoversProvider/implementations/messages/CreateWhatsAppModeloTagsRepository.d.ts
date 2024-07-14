import { ICreateWhatsAppModeloTagsRepository, TagCreate } from '../../models/messages/ICreateWhatsAppModeloTagsRepository';
export declare class CreateWhatsAppModeloTagsRepository implements ICreateWhatsAppModeloTagsRepository {
    create(tag: TagCreate): Promise<void>;
}
