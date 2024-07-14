export declare class RestoreNodesByVersionIdService {
    execute(flowId: string, selectedVersionId: number, newCurrentVersionId: number): Promise<void>;
    private getNodesWithGreaterVersionId;
    private getNodeVersionByVersionId;
    private removeBaseNode;
    private updateBaseNode;
    private createNewNodeVersion;
    private updateFlowInitialSequence;
}
