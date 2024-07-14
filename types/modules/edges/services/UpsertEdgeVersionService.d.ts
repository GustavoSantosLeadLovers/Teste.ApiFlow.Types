import { Edges } from '@prisma/client';
export declare class UpsertEdgeVersionService {
    execute(baseEdge: Edges, versionId: number): Promise<void>;
    private createEdgeVersion;
    private editEdgeVersion;
}
