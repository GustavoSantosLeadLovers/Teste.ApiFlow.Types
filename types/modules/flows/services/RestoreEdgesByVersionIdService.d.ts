export declare class RestoreEdgesByVersionIdService {
    execute(flowId: string, selectedVersionId: number, newCurrentVersionId: number): Promise<void>;
    private getEdgesWithGreaterVersionId;
    private getEdgeVersionByVersionId;
    private removeBaseEdge;
    private updateBaseEdge;
    private createNewEdgeVersion;
}
