export type Contact = {
    id: number;
    name: string;
    phone: string;
};
export interface IListContactsByPhoneNumbersRepository {
    list(phoneNumbers: string[]): Promise<Contact[]>;
}
