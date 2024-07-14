import { CreateModelAudio, ICreateModelAudioRepository } from '../../models/messages/ICreateModelAudioRepository';
export declare class CreateModelAudioRepository implements ICreateModelAudioRepository {
    create(audio: CreateModelAudio): Promise<void>;
}
