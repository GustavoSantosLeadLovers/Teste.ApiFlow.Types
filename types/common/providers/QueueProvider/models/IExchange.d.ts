import { Exchange, Queue } from 'amqp-ts';
export interface IExchange {
    name: string;
    token: string;
    options?: Exchange.DeclarationOptions;
    queues: {
        name: string;
        token: string;
        options?: Queue.DeclarationOptions;
    }[];
}
