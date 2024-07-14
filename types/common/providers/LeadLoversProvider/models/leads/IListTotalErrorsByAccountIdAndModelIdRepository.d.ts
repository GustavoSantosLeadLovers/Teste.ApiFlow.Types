export interface IListTotalErrorsByAccountIdAndModelIdRepository {
    list(usuaSistCodi: number, accountId: number, modelId: number): Promise<number>;
}
