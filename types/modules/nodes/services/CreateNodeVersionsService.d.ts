import { Nodes } from '@prisma/client';
export declare class CreateNodeVersionsService {
    execute(baseNodes: Nodes[]): Promise<void>;
    private createNodeVersions;
}
