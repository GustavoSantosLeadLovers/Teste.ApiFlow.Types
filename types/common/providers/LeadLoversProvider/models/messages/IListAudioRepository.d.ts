export interface IListAudioRepository {
    list(usuaSistCodi: number, url: string): Promise<number>;
}
