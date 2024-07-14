import { IEditContactRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IEditContactRepository';
type EditContact = {
    id: number;
    name: string;
    phone: string;
};
export declare class EditContactService {
    private editContactRepository;
    constructor(editContactRepository: IEditContactRepository);
    execute(userId: number, contact: EditContact): Promise<void>;
}
export {};
