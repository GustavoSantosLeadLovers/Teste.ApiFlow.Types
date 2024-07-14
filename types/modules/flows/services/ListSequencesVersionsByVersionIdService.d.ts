import { NodeVersions } from '@prisma/client';
export declare class ListSequencesVersionsByVersionIdService {
    execute(flowId: string, versionId: number): Promise<NodeVersions[]>;
}
