import { NodeVersions } from '@prisma/client';
export declare class ListNodeVersionByVersionId {
    execute(baseNodeId: string, versionId: number): Promise<NodeVersions | null>;
}
