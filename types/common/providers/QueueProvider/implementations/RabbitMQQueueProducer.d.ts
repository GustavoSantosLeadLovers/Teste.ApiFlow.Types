import * as Amqp from 'amqp-ts';
import { IQueueProducer } from '../models/IQueueProducer';
import { IRabbitMQOptions } from '../../../../config/queue';
export declare class RabbitMQQueueProducer implements IQueueProducer {
    private options;
    private connection;
    constructor(options: IRabbitMQOptions);
    produce<T = any>(name: string, data: T, message_options?: any, queue_options?: Amqp.Queue.DeclarationOptions): void;
}
