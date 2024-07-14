import { IPublisherProvider } from '../models/IPublisherProvider';
export declare class RedisPublisherProvider implements IPublisherProvider {
    private client;
    constructor();
    publish<T>(channel: string, message: T): Promise<void>;
}
