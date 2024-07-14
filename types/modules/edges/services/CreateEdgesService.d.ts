import { Edges } from '@prisma/client';
import { CreateEdgeDTO } from '../dtos/edge.dto';
export declare class CreateEdgesService {
    execute(versionId: number, edges: CreateEdgeDTO[]): Promise<Edges[]>;
    private createEdges;
}
