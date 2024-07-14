import { Flows } from '@prisma/client';
export declare class ListFlowByIdService {
    execute(userId: number, flowId: string): Promise<Flows>;
}
