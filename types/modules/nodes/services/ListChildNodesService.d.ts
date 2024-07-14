import { Nodes } from '@prisma/client';
export declare class ListChildNodesService {
    execute(parentNode: string, versionId?: number): Promise<Nodes[]>;
    private getNodesFromNodesTable;
    private getNodesFromNodeVersionsTable;
}
