import { Nodes } from '@prisma/client';
export declare class EditNodeVersionService {
    execute(nodeVersionId: string, baseNode: Nodes): Promise<void>;
}
