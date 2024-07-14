import { flowStatus } from '../dtos/flow.dto';
export declare class UpdateFlowStatusService {
    execute(flowId: string, newStatus: flowStatus): Promise<void>;
}
