type Version = {
    state: string;
    id?: number;
};
export declare class ListVersionStateService {
    execute(flowId: string): Promise<Version>;
    private listCurrentVersion;
    private increment60Minutes;
}
export {};
