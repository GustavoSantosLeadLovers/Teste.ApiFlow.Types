import { IRemoveContactRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IRemoveContactRepository';
export declare class RemoveContactService {
    private removeContactRepository;
    constructor(removeContactRepository: IRemoveContactRepository);
    execute(userId: number, id: number): Promise<void>;
}
