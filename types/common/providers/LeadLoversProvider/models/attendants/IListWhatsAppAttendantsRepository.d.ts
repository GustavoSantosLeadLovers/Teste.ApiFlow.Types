export type Attendant = {
    id: number;
    name: string;
    email: string;
};
export interface IListWhatsAppAttendantsRepository {
    list(userId: number): Promise<Attendant[]>;
}
