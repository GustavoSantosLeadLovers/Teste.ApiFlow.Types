export type TeamAttendant = {
    id: number;
    name: string;
};
export interface IListWhatsAppTeamAttendantRepository {
    list(attendantId: number): Promise<TeamAttendant | undefined>;
}
