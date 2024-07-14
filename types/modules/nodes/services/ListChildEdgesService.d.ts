import { Edges } from '@prisma/client';
export declare class ListChildEdgesService {
    execute(reactFlowIds: string[], versionId?: number): Promise<Edges[]>;
    private getEdgesFromEdgesTable;
    private getEdgesFromEdgeVersionsTable;
}
