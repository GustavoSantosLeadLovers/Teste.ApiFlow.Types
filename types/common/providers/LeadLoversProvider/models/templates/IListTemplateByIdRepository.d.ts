export type Template = {
    id: string;
    userId: number;
    accountId: number;
    templateId: string;
    name: string;
    html: string;
    htmlHeader: string;
    htmlFooter: string;
    status: number;
    language: string;
    componentFormat: string;
    componentExample: string;
    componentType: string;
    componentText: string;
};
export interface IListTemplateByIdRepository {
    list(templateId: number): Promise<Template | undefined>;
}
