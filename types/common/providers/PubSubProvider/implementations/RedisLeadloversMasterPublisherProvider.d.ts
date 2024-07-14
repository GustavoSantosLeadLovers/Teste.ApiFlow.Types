import { IPublisherProvider } from '../models/IPublisherProvider';
export declare class RedisLeadloversMasterPublisherProvider implements IPublisherProvider {
    private client;
    constructor();
    publish<T>(channel: string, message: T): Promise<void>;
}
