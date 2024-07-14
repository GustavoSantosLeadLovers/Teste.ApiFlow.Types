import { Nodes } from '@prisma/client';
import { EditNodeDTO } from '../dtos/nodeInput.dto';
import { NodeToRemove } from '../dtos/nodeOutput.dto';
export declare class EditNodeService {
    execute(versionId: number, nodeId: string, inputData: EditNodeDTO): Promise<{
        node: Nodes;
        toRemove: NodeToRemove[];
    }>;
    private validateInputData;
    private getActionsFromDB;
    private updateActions;
    private editNode;
    private getButtonTriggerEdgesToRemove;
    private removeEdges;
    private removeButtonTrigger;
    private updateResult;
    private removeButtonTriggers;
}
