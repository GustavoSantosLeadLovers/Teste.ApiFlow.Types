export type CreateMessage = {
    projCodi: number;
    emailPara: string;
    emailAssunto: string;
    message: string;
    usuaSistCodi: number;
};
export interface ICreateEmailSequenceNotificationErrorRepository {
    create(data: CreateMessage): Promise<void>;
}
