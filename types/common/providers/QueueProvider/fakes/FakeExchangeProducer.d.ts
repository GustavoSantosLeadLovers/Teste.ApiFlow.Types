import { IExchangeProducer } from '../models/IExchangeProducer';
export declare class FakeExchangeProducer implements IExchangeProducer {
    exchange: string[];
    publish<T = any>(data: T): void;
}
