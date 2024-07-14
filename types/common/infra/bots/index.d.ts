import 'dotenv/config';
export interface IWorkerMessage {
    message: string;
    type: 'info' | 'error' | 'warning';
}
export type IServices = 'flow-publish' | 'sequence-publish' | 'sequence-remove' | 'message-publish' | 'message-remove' | 'trigger-publish' | 'trigger-remove' | 'flow-publication-monitor' | 'sequence-publication-monitor' | 'message-publication-monitor' | 'notify-flow-publish-error' | 'notify-sequence-publish-error' | 'notify-message-publish-error' | 'notify-trigger-publish-error' | 'notify-sequence-remove-error' | 'notify-message-remove-error' | 'notify-trigger-remove-error' | 'list-publish' | 'funnel-publish' | 'model-publish' | 'whatsapp-trigger-publish' | 'list-publication-monitor' | 'funnel-publication-monitor' | 'model-publication-monitor' | 'notify-list-publish-error' | 'notify-funnel-publish-error' | 'notify-models-publish-error' | 'notify-whatsapp-trigger-publish-error' | 'recover-poison';
interface IServiceParams {
    [key: string]: string;
}
export interface IService {
    type: IServices;
    message: string;
    auto_start: boolean;
    params?: IServiceParams;
}
export {};
