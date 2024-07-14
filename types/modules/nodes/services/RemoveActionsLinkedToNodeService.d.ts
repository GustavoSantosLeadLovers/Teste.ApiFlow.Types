import { Nodes } from '@prisma/client';
type ActionsToRemove = {
    triggerId: string;
    actions: string[];
};
export declare class RemoveActionsLinkedToNodeService {
    execute(node: Nodes, versionId: number): Promise<ActionsToRemove[]>;
    private addActionsToRemove;
}
export {};
