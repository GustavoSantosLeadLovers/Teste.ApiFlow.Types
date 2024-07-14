import { IExchangeProducer } from '../models/IExchangeProducer';
import { IRabbitMQOptions } from '../../../../config/queue';
export declare class RabbitMQExchangeProducer implements IExchangeProducer {
    private connection;
    private exchange;
    constructor(exchangeName: string, options: IRabbitMQOptions, type?: string);
    publish<T = any>(data: T): void;
}
