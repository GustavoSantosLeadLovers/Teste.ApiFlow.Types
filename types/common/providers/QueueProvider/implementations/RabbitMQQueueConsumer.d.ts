import { IQueueConsumer } from '../models/IQueueConsumer';
import { IRabbitMQOptions } from '../../../../config/queue';
export declare class RabbitMQQueueConsumer implements IQueueConsumer {
    private readonly options;
    private readonly exchange_name?;
    private readonly queue_name?;
    private connection;
    private poison;
    private notifyError;
    private queue;
    private queueName;
    private retryExchange;
    private retryOptions;
    constructor(options: IRabbitMQOptions, exchange_name?: string | undefined, queue_name?: string | undefined);
    private connect;
    private assertQueue;
    consume<T = any>(process: (data: T) => Promise<void>, queue_name?: string, options?: IRabbitMQOptions): void;
    private getCurrentAttempt;
    private handleError;
}
