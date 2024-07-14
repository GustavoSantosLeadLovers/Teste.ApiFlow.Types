export interface ISubscriberProvider {
    subscribe(channel: string, callback: (message: string) => void): Promise<void>;
}
