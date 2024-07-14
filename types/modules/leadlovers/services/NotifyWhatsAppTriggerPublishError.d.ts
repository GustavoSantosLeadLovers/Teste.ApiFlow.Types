import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export default class NotifyWhatsAppTriggerPublishErrorService {
    private queueConsumer;
    constructor(queueConsumer: IQueueConsumer);
    execute(): void;
}
