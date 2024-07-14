import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export default class NotifyModelsPublishErrorService {
    private queueConsumer;
    constructor(queueConsumer: IQueueConsumer);
    execute(): void;
}
