import { EditAudio, IEditAudioRepository } from '../../models/messages/IEditAudioRepository';
export declare class EditAudioRepository implements IEditAudioRepository {
    edit(audio: EditAudio): Promise<void>;
}
