import { IPublisherProvider } from '../../../common/providers/PubSubProvider/models/IPublisherProvider';
export declare class TestWhatsAppMessageSendingService {
    private publisherProvider;
    constructor(publisherProvider: IPublisherProvider);
    execute(machineId: number, messageId: string, phoneNumber: string): Promise<{
        status: 'success' | 'error';
        message: string;
    }>;
    private canSendMessage;
    private sendMessage;
}
