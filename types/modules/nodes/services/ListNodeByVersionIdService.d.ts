import { Nodes } from '@prisma/client';
import { nodeType } from '../dtos/node.dto';
export declare class ListNodeByVersionIdService {
    execute(flowId: string, nodeType: nodeType, versionId: number): Promise<Nodes[]>;
}
