import { Board, IListBoardsRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListBoardsRepository';
import { IListColumnsAccessRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListColumnsAccessRepository';
import { IListColumnsByColumnIdsRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListColumnsByColumnIdsRepository';
import { Column, IListColumnsRepository } from '../../../common/providers/LeadLoversProvider/models/crms/IListColumnsRepository';
type Result = {
    columns: Column[];
} & Board;
export declare class ListBoardsService {
    private listBoardsRepository;
    private listColumnsAccessRepository;
    private listColumnsByColumnIdsRepository;
    private listColumnsRepository;
    constructor(listBoardsRepository: IListBoardsRepository, listColumnsAccessRepository: IListColumnsAccessRepository, listColumnsByColumnIdsRepository: IListColumnsByColumnIdsRepository, listColumnsRepository: IListColumnsRepository);
    execute(userId: number): Promise<Result[]>;
}
export {};
