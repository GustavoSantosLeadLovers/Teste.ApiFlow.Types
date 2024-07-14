export type Audio = {
    id: number;
    name: string;
    url: string;
    size: number;
    insertedAt: string;
};
export interface IListAudiosByModeCodiRepository {
    list(modeCodi: number): Promise<Audio[]>;
}
