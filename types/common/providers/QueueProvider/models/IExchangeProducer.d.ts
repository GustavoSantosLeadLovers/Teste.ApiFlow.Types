export interface IExchangeProducer {
    publish<T = any>(data: T): void;
}
