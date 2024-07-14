export type CreateAudio = {
    usuaSistCodi: number;
    name: string;
    url: string;
    size: number;
};
export interface ICreateAudioRepository {
    create(audio: CreateAudio): Promise<number>;
}
