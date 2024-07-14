import { IQueueConsumer } from '../models/IQueueConsumer';
export declare class FakeQueueConsumer implements IQueueConsumer {
    queue: string[];
    consume<T = any>(process: (data: T) => Promise<void>): void;
}
