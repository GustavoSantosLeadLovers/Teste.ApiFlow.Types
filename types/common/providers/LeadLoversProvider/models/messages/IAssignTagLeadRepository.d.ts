export type AssignTag = {
    tagId: number;
    leadUserId: number;
};
export interface IAssignTagLeadRepository {
    create(tag: AssignTag): Promise<void>;
}
