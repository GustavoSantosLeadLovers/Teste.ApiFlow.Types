import { NodeVersions } from '@prisma/client';
import { CustomTRPCError } from '../../../common/helpers/CustomTRPCError';
type TriggersToPublish = {
    toPublish: NodeVersions[];
    toRemove: NodeVersions[];
    errors: CustomTRPCError[];
};
export declare class ListSequenceEndTriggersToPublishService {
    execute(flowId: string, parentNode: string, publishingVersionId: number): Promise<TriggersToPublish>;
    private listSequenceEndAndTriggers;
    private listSequenceEndTriggersToRemove;
    private listSequenceEndTriggersToPublish;
}
export {};
