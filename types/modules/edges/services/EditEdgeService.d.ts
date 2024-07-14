import { Edges } from '@prisma/client';
import { EditEdgeDTO } from '../dtos/edge.dto';
export declare class EditEdgeService {
    execute(versionId: number, edgeId: string, inputData: EditEdgeDTO): Promise<Edges>;
}
