import { Nodes } from '@prisma/client';
import { flowStatus } from '../../flows/dtos/flow.dto';
import { CreateNodeDTO } from '../dtos/nodeInput.dto';
export type CreateNode = {
    id?: string;
} & Omit<CreateNodeDTO, 'id'>;
export declare class CreateNodeService {
    execute(versionId: number, internReferenceId: string, node: CreateNode, status?: flowStatus): Promise<Nodes>;
    private createNode;
    private updateFlowInitialSequence;
}
