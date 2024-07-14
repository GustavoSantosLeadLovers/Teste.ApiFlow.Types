import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { AlreadyExistsFunnelRepository } from '../../../../common/providers/LeadLoversProvider/implementations/funnels/AlreadyExistsFunnelRepository';
import { EditFunnelRepository } from '../../../../common/providers/LeadLoversProvider/implementations/funnels/EditFunnelRepository';
export declare class EditFunnelService {
    private editFunnelQueueConsumer;
    private alreadyExistsFunnelRepository;
    private editFunnelRepository;
    constructor(editFunnelQueueConsumer: IQueueConsumer, alreadyExistsFunnelRepository: AlreadyExistsFunnelRepository, editFunnelRepository: EditFunnelRepository);
    execute(): void;
}
