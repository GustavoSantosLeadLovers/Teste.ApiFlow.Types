import { Nodes } from '@prisma/client';
import { NodeOutputDTO } from '../../modules/nodes/dtos/node.dto';
export declare class NodeMapper {
    static toResponse(node: Nodes): NodeOutputDTO;
}
