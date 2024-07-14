import { Nodes } from '@prisma/client';
export declare class RemoveNodesByReactFlowIdsService {
    execute(flowId: string, reactFlowIds: string[], versionId: number): Promise<Nodes[]>;
    listNodes(flowId: string, reactFlowIds: string[]): Promise<Nodes[]>;
    private updateFlowInitialSequence;
}
