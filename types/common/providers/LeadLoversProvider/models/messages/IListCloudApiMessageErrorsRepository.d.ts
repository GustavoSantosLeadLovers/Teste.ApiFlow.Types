export type MessageError = {
    id: number;
    errorCode: number;
    errorDescription: string;
};
export interface IListCloudApiMessageErrorsRepository {
    list(): Promise<MessageError[]>;
}
