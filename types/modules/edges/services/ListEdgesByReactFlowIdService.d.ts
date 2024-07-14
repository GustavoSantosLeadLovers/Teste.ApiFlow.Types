import { Edges } from '@prisma/client';
export declare class ListEdgesByReactFlowIdService {
    execute(reactFlowIds: string[], flowId: string): Promise<Edges[]>;
}
