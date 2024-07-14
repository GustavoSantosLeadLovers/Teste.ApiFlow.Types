import { Versions } from '@prisma/client';
export declare class ListVersionsByFlowIdService {
    execute(flowId: string): Promise<Versions[]>;
}
