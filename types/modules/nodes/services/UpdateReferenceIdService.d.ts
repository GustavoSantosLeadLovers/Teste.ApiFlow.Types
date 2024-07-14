import { IQueueConsumer } from '../../../common/providers/QueueProvider/models/IQueueConsumer';
export declare class UpdateReferenceIdService {
    private updateNodeReferenceIdQueueConsumer;
    constructor(updateNodeReferenceIdQueueConsumer: IQueueConsumer);
    execute(): void;
}
