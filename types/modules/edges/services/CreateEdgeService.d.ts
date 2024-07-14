import { Edges } from '@prisma/client';
import { CreateEdgeDTO } from '../dtos/edge.dto';
export declare class CreateEdgeService {
    execute(versionId: number, internReferenceId: string, inputData: Omit<CreateEdgeDTO, 'id'>): Promise<Edges>;
}
