import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export default class NotifyFunnelPublishErrorService {
    private queueConsumer;
    constructor(queueConsumer: IQueueConsumer);
    execute(): void;
}
