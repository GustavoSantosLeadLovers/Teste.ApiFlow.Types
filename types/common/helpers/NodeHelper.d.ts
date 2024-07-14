import { CreateMessage } from '../../modules/nodes/dtos/message.dto';
import { nodeType } from '../../modules/nodes/dtos/node.dto';
export declare enum NodeAction {
    CREATE = "create",
    EDIT = "edit"
}
export declare class NodeHelper {
    static guardAgainstSequencesWithSameName(action: NodeAction, id: string, flowId: string, type: nodeType, sequenceName: string): Promise<void>;
    static guardAgainstInvalidMessageData(flowId: string, message: CreateMessage): Promise<void>;
    static updateStatus({ baseNodeId, versionNodeId, status, publishingVersionId }: {
        baseNodeId: string;
        versionNodeId: string;
        status: string;
        publishingVersionId?: number;
    }): Promise<void>;
    static insertLeadLoversId({ baseNodeId, leadloversId }: {
        baseNodeId: string;
        leadloversId: number;
    }): Promise<void>;
}
