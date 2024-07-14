export type EditAudio = {
    audioId: number;
    name: string;
    url: string;
    size: number;
};
export interface IEditAudioRepository {
    edit(audio: EditAudio): Promise<void>;
}
