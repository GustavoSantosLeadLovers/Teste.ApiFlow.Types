export interface IPublisherProvider {
    publish<T>(channel: string, message: T): Promise<void>;
}
