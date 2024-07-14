import { IListActionTotalLeadCodiWithErrorsByListCodiRepository } from '../../../common/providers/LeadLoversProvider/models/messages/IListActionTotalLeadCodiWithErrorsByListCodiRepository';
export declare class ListActionTotalLeadCodiWithErrorsByListCodiService {
    private listActionTotalLeadCodiWithErrorsByListCodiRepository;
    constructor(listActionTotalLeadCodiWithErrorsByListCodiRepository: IListActionTotalLeadCodiWithErrorsByListCodiRepository);
    execute(listCodi: number, modeCodi: number, userId: number): Promise<number>;
}
