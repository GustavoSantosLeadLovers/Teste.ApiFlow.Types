import { IQueueConsumer } from '../../../../common/providers/QueueProvider/models/IQueueConsumer';
import { CreateMessageRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/CreateMessageRepository';
import { IExchangeProducer } from '../../../../common/providers/QueueProvider/models/IExchangeProducer';
import { ListSequenceNumberRepository } from '../../../../common/providers/LeadLoversProvider/implementations/messages/ListSequenceNumberRepository';
export declare class CreateMessageService {
    private createMessageQueueConsumer;
    private createTaskExchangeProducer;
    private listSequenceNumberRepository;
    private createMessageRepository;
    private updateNodeLeadloversIdExchangeProducer;
    constructor(createMessageQueueConsumer: IQueueConsumer, createTaskExchangeProducer: IExchangeProducer, listSequenceNumberRepository: ListSequenceNumberRepository, createMessageRepository: CreateMessageRepository, updateNodeLeadloversIdExchangeProducer: IExchangeProducer);
    execute(): void;
    private getSequenceNumber;
    private makeMessage;
}
