import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class UpdateLeadloversIdService {
    private updateNodeLeadloversIdQueueConsumer;
    constructor(updateNodeLeadloversIdQueueConsumer: IQueueConsumer);
    execute(): void;
}
