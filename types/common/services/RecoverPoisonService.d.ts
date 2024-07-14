import { IQueueConsumer } from '../providers/QueueProvider/models/IQueueConsumer';
import { IQueueProducer } from '../providers/QueueProvider/models/IQueueProducer';
export type RecoverPoisonData = {
    queue?: string;
};
export default class RecoverPoisonService {
    private queueConsumer;
    private queueProducer;
    constructor(queueConsumer: IQueueConsumer, queueProducer: IQueueProducer);
    execute({ queue }: RecoverPoisonData): void;
}
