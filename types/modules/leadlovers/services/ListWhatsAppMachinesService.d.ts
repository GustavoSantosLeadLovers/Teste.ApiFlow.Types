import { IListWhatsAppMachinesRepository, Machine } from '../../../common/providers/LeadLoversProvider/models/machines/IListWhatsAppMachinesRepository';
export declare class ListWhatsAppMachinesService {
    private listWhatsAppMachinesRepository;
    constructor(listWhatsAppMachinesRepository: IListWhatsAppMachinesRepository);
    execute(userId: number): Promise<Machine[]>;
}
