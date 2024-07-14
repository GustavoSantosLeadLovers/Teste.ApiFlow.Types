export type EditConditionalTrigger = {
    id: number;
    active?: boolean;
};
export interface IEditConditionalTriggerRepository {
    edit(trigger: EditConditionalTrigger): Promise<void>;
}
