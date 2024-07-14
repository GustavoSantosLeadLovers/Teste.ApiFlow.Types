import { Nodes } from '@prisma/client';
export declare class ListNodeByIdService {
  execute(reactFlowId: string, flowId: string): Promise<Nodes>;
}
