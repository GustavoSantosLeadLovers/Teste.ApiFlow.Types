import { Nodes } from '@prisma/client';
import { PublishMessageEvent } from '../../../common/helpers/QueueEvents';
export declare const messagesToPublishFactory: (messages: Nodes[], sequenceId: string, publishingVersionId: number, userId: number, funnelId: number) => Promise<PublishMessageEvent[]>;
