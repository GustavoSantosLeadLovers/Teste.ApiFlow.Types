import { NodeVersions } from '@prisma/client';
import { CustomTRPCError } from '../../../common/helpers/CustomTRPCError';
type ListMessagesParams = {
    flowId: string;
    versionId: number;
    id: string;
    reactFlowId: string;
    name: string;
};
type MessageToPublish = {
    sequenceNumber: number;
} & NodeVersions;
type MessagesToPublish = {
    toPublish: MessageToPublish[];
    toRemove: NodeVersions[];
    errors: CustomTRPCError[];
};
export declare class ListMessagesToPublishService {
    execute(params: ListMessagesParams): Promise<MessagesToPublish>;
}
export {};
