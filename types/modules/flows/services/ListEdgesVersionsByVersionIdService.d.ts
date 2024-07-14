import { EdgeVersions } from '@prisma/client';
export declare class ListEdgesVersionsByVersionIdService {
    execute(flowId: string, versionId: number, nodeIds: string[]): Promise<EdgeVersions[]>;
}
