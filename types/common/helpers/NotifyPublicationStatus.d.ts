import { flowStatus } from '../../modules/flows/dtos/flow.dto';
type Body = {
    flowId: string;
    status: flowStatus;
    time: string;
};
export declare const notifyApi: (body: Body) => Promise<void>;
export {};
