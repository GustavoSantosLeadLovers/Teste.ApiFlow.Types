import { NodeVersions } from '@prisma/client';
export declare class ListNodeVersionByVersionIdService {
    execute(baseNodeId: string, versionId: number): Promise<NodeVersions | null>;
}
