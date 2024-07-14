import { Exchange, Queue } from 'amqp-ts';
export interface IRabbitMQConnectionOptions {
    hostname: string;
    port: number;
    vhost: string;
    user: string;
    password: string;
}
export interface IRabbitMQRetryOptions {
    suffix: string;
    ttl: number;
}
export interface IRabbitMQOptions {
    connectionOptions: IRabbitMQConnectionOptions;
    exchangeOptions?: Exchange.DeclarationOptions;
    queueOptions?: Queue.DeclarationOptions;
    consumerOptions?: Queue.ActivateConsumerOptions;
    messageOptions?: any;
    retryOptions?: IRabbitMQRetryOptions[];
}
interface IQueueConfig {
    driver: 'rabbitmq';
    config: {
        rabbitmq: IRabbitMQOptions;
    };
}
export declare const queueConfigs: IQueueConfig;
export {};
