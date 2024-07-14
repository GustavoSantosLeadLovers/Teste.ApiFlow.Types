import { IListTagByUsuaSistCodiAndPhoneRepository, Tag } from '../../models/tags/IListTagByUsuaSistCodiAndPhoneRepository';
export declare class ListTagByUsuaSistCodiAndPhoneRepository implements IListTagByUsuaSistCodiAndPhoneRepository {
    list(usuaSistCodi: number, phone: string): Promise<Tag>;
}
