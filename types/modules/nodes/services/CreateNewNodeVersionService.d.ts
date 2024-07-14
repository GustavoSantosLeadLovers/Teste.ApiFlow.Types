import { NodeOutputDTO } from '../dtos/node.dto';
import { EditNodeDTO } from '../dtos/nodeInput.dto';
export declare class CreateNewNodeVersionService {
    execute(versionId: number, inputData: EditNodeDTO): Promise<NodeOutputDTO>;
    private getBaseNode;
    private guardAgainstNodesWithSameName;
    private mergeActions;
    private makeNewNode;
}
