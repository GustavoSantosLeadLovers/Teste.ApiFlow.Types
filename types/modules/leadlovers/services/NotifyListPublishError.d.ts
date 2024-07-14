import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export default class NotifyListPublishErrorService {
    private queueConsumer;
    constructor(queueConsumer: IQueueConsumer);
    execute(): void;
}
