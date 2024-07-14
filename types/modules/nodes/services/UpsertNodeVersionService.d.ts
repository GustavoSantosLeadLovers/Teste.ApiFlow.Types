import { Nodes } from '@prisma/client';
export declare class UpsertNodeVersionService {
    execute(baseNode: Nodes, versionId: number): Promise<void>;
    private createNewNodeVersion;
    private editNodeVersion;
}
