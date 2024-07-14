export type Tag = {
    leadUserId: number;
    name: string;
    phone: string;
    birthDate: string;
    city: string;
    state: string;
    company: string;
    genre: string;
    email: string;
};
export interface IListTagByUsuaSistCodiAndPhoneRepository {
    list(usuaSistCodi: number, phone: string): Promise<Tag>;
}
