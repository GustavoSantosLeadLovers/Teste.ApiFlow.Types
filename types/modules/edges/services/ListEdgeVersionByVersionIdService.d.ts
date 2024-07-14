import { EdgeVersions } from '@prisma/client';
export declare class ListEdgeVersionByVersionIdService {
    execute(baseEdgeId: string, versionId: number): Promise<EdgeVersions | null>;
}
