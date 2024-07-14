import { Edges } from '@prisma/client';
export declare class RemoveEdgeService {
    execute(edgeId: string, versionId: number): Promise<Edges>;
}
