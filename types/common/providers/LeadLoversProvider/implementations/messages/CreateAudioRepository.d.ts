import { CreateAudio, ICreateAudioRepository } from '../../models/messages/ICreateAudioRepository';
export declare class CreateAudioRepository implements ICreateAudioRepository {
    create(audio: CreateAudio): Promise<number>;
}
