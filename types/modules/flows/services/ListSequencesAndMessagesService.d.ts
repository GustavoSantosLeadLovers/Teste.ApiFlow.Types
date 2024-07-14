import { ListAllNodesOutputDTO } from '../dtos/flow.dto';
export declare class ListSequencesAndMessagesService {
    execute(flowId: string): Promise<ListAllNodesOutputDTO>;
}
