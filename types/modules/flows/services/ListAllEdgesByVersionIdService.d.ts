import { Edges } from '@prisma/client';
export declare class ListAllEdgesByVersionIdService {
    execute(flowId: string, versionId: number, nodeIds: string[]): Promise<Edges[]>;
}
