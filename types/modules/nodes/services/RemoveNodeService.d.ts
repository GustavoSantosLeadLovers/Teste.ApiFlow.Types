import { Nodes } from '@prisma/client';
export declare class RemoveNodeService {
    execute(nodeId: string, versionId: number): Promise<Nodes>;
    private updateFlowInitialSequence;
}
