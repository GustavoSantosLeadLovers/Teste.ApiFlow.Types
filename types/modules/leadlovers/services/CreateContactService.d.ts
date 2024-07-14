import { ICreateContactRepository } from '../../../common/providers/LeadLoversProvider/models/messages/ICreateContactRepository';
type CreateContact = {
    name: string;
    phone: string;
};
export declare class CreateContactService {
    private createContactRepository;
    constructor(createContactRepository: ICreateContactRepository);
    execute(userId: number, contact: CreateContact): Promise<{
        id: number;
        name: string;
        phone: string;
    }>;
}
export {};
