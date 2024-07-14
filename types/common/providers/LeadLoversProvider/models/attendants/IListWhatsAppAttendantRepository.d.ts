export type Attendant = {
    id: number;
    name: string;
};
export interface IListWhatsAppAttendantRepository {
    list(attendantId: number): Promise<Attendant | undefined>;
}
