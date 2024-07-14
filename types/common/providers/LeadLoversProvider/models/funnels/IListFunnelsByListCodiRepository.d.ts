export type Funnel = {
    id: number;
    name: string;
    isInitial: boolean;
    type: number;
    whatsAppGroup: boolean;
};
export interface IListFunnelsByListCodiRepository {
    list(listCodi: number): Promise<Funnel[]>;
}
