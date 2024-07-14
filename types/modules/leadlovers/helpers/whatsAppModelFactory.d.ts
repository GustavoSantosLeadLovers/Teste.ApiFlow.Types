import { PublishMessageEvent } from '../../../common/helpers/QueueEvents';
import { CreateMessage } from '../../../common/providers/LeadLoversProvider/models/messages/ICreateMessageRepository';
export declare const whatsAppModelFactory: (message: PublishMessageEvent) => Promise<CreateMessage>;
