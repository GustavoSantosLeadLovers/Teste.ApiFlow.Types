export type TemplateComponent = {
    type: string;
    format: string;
    text: string;
    example: string;
};
export interface IListTemplateComponentsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateComponent[]>;
}
