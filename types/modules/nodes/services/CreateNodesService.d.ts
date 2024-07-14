import { Nodes } from '@prisma/client';
import { CreateNodeDTO } from '../dtos/nodeInput.dto';
export declare class CreateNodesService {
    execute(versionId: number, nodes: CreateNodeDTO[]): Promise<Nodes[]>;
    private createNodes;
    private saveNodes;
    private updateFlowInitialSequence;
    private returnBaseNodes;
}
