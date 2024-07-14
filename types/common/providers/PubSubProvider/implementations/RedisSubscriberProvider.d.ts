import { ISubscriberProvider } from '../models/ISubscriberProvider';
export declare class RedisSubscriberProvider implements ISubscriberProvider {
    private client;
    constructor();
    subscribe(channel: string, callback: (message: string) => void): Promise<void>;
}
