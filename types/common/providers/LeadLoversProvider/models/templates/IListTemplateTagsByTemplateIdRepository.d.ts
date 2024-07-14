export type TemplateTag = {
    id: string;
    name: string;
    value: string;
};
export interface IListTemplateTagsByTemplateIdRepository {
    list(templateId: number): Promise<TemplateTag[]>;
}
