import { IQueueProducer } from '../models/IQueueProducer';
export declare class FakeQueueProducer implements IQueueProducer {
    queue: string[];
    produce<T = any>(_name: string, data: T): void;
}
