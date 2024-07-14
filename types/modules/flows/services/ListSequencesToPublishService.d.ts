import { NodeVersions } from '@prisma/client';
import { CustomTRPCError } from '../../../common/helpers/CustomTRPCError';
type SequencesToPublish = {
    toPublish: NodeVersions[];
    toRemove: NodeVersions[];
    errors: CustomTRPCError[];
};
export declare class ListSequencesToPublishService {
    execute(flowId: string, versionId: number): Promise<SequencesToPublish>;
}
export {};
