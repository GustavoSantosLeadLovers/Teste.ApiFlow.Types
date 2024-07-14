import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export default class NotifySequencePublishErrorService {
    private queueConsumer;
    constructor(queueConsumer: IQueueConsumer);
    execute(): void;
}
