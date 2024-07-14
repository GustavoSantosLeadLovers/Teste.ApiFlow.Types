import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class UpdateActionReferenceIdService {
    private updateActionReferenceIdQueueConsumer;
    constructor(updateActionReferenceIdQueueConsumer: IQueueConsumer);
    execute(): void;
}
