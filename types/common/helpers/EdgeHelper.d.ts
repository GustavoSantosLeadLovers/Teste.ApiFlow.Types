import { CreateEdgeDTO } from '../../modules/edges/dtos/edge.dto';
export declare class EdgeHelper {
    static validateEdge(edge: Omit<CreateEdgeDTO, 'id'>): Promise<void>;
}
