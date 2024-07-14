export type TeamAttendants = {
    id: number;
    name: string;
};
export interface IListWhatsAppTeamAttendantsRepository {
    list(userId: number): Promise<TeamAttendants[]>;
}
