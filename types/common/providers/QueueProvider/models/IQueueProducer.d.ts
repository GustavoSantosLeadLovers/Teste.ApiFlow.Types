import { Queue } from 'amqp-ts';
export interface IQueueProducer {
    produce<T = any>(name: string, data: T, message_options?: any, queue_options?: Queue.DeclarationOptions): void;
}
