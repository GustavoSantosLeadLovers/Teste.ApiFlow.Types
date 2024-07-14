import { Versions } from '@prisma/client';
export declare class ListCurrentVersionByFlowIdService {
    execute(flowId: string): Promise<Versions>;
}
