import { Nodes } from '@prisma/client';
export declare class ListAllNodesByVersionIdService {
    execute(flowId: string, versionId: number): Promise<Nodes[]>;
}
