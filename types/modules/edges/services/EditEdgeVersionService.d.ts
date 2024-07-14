import { Edges } from '@prisma/client';
export declare class EditEdgeVersionService {
    execute(edgeVersionId: string, baseEdge: Edges): Promise<void>;
}
