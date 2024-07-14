import { Nodes } from '@prisma/client';
export declare class ListNodeByReactFlowIdService {
    execute(reactFlowId: string, flowId: string, versionId?: number): Promise<Nodes>;
    private getNodeFromNodesTable;
    private getNodeFromNodeVersionsTable;
}
