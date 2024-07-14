export type TemplateButton = {
    id: string;
    type: string;
    text: string;
    url: string;
};
export interface IListTemplateButtonsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateButton[]>;
}
