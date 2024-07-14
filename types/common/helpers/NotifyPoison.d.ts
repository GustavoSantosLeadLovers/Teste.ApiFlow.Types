type Message = {
    queue: string;
    stack: string;
    error: string;
    data: string;
};
export declare class NotifyPoison {
    static sendToSlack(message: Message): Promise<void>;
}
export {};
