import { IListAudioRepository } from '../../models/messages/IListAudioRepository';
export declare class ListAudioRepository implements IListAudioRepository {
    list(usuaSistCodi: number, url: string): Promise<number>;
}
