import { IRabbitMQOptions } from '../../../../config/queue';
export interface IQueueConsumer {
    consume<T = any>(process: (data: T) => Promise<void>, queue_name?: string, options?: IRabbitMQOptions): void;
}
