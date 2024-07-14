export type Names = {
    machineName: string;
    funnelName: string;
    messageId: number;
    messageName: string;
};
export interface IListNamesByMachineFunnelAndModelRepository {
    list(machineId: number, funnelId: number, messageIndex: number): Promise<Names | undefined>;
}
