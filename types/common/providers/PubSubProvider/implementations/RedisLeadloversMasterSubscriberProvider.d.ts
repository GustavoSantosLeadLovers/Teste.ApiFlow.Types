import { ISubscriberProvider } from '../models/ISubscriberProvider';
export declare class RedisLeadloversMasterSubscriberProvider implements ISubscriberProvider {
    private client;
    constructor();
    subscribe(channel: string, callback: (message: string) => void): Promise<void>;
}
