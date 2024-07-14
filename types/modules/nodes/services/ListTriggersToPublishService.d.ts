import { NodeVersions } from '@prisma/client';
import { CustomTRPCError } from '../../../common/helpers/CustomTRPCError';
type ListTriggersParams = {
    flowId: string;
    versionId: number;
    parentNode: string;
    id: string;
    reactFlowId: string;
};
type TriggersToPublish = {
    toPublish: NodeVersions[];
    toRemove: NodeVersions[];
    errors: CustomTRPCError[];
};
export declare class ListTriggersToPublishService {
    execute(message: ListTriggersParams): Promise<TriggersToPublish>;
    private listTriggersFromSequence;
}
export {};
