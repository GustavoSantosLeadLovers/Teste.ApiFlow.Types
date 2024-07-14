import { Edges } from '@prisma/client';
export declare class ListEdgeLinkedToNodeService {
    execute(reactFlowId: string, flowId: string): Promise<Edges[]>;
}
