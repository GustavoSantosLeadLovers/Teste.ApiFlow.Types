import { Edges } from '@prisma/client';
export declare class ListEdgesService {
    execute(flowId: string, nodeIds: string[]): Promise<Edges[]>;
}
