import { Nodes } from '@prisma/client';
export declare class ListNodesByReacFlowIdService {
    execute(reactFlowIds: string[], flowId: string): Promise<Nodes[]>;
}
