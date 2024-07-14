export type CreateModelAudio = {
    usuaSistCodi: number;
    modeCodi: number;
    audioId: number;
};
export interface ICreateModelAudioRepository {
    create(audio: CreateModelAudio): Promise<void>;
}
