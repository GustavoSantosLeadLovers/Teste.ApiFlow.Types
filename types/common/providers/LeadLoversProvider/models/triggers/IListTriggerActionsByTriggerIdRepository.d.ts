export type TriggerAction = {
    id: number;
    triggerId: number;
    typeId: number;
    listCodi: number;
    funiCodi: number;
    funiNivel: number;
    score: number;
    tagId: number;
    assignTo: string;
    assignId: number;
    respFieldId: number;
    respFieldName: string;
    productId: number;
    crmBoard: number;
    crmColumn: number;
    crmGroup: number;
};
export interface IListTriggerActionsByTriggerIdRepository {
    list(triggerId: number): Promise<TriggerAction[]>;
}
