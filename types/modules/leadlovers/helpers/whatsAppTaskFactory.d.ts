import { PublishMessageEvent } from '../../../common/helpers/QueueEvents';
import { CreateTask } from '../../../common/providers/LeadLoversProvider/models/messages/ICreateTaskRepository';
export declare const whatsAppTaskFactory: (leadloversId: number, message: PublishMessageEvent) => CreateTask;
