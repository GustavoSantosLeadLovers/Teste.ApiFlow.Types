import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class UpdateActionLeadloversIdService {
    private updateActionLeadloversIdQueueConsumer;
    constructor(updateActionLeadloversIdQueueConsumer: IQueueConsumer);
    execute(): void;
}
