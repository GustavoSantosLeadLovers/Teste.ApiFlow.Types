export type Template = {
    id: number;
    userId: number;
    accountId: number;
    templateId: number;
    name: string;
    hHtml: string;
    htmlHeader: string;
    htmlFooter: string;
    status: number;
    language: string;
};
export interface IListTemplateByAccountId {
    list(accountId: number): Promise<Template[]>;
}
