import { IListTokenQrCodeRespository, LeadsZappRequestModel, LeadsZappResponseModel } from '../../models/accounts/IListTokenQrCodeRespository';
export declare class ListTokenQrCodeRespository implements IListTokenQrCodeRespository {
    list(apiKey: string, dataBody: LeadsZappRequestModel): Promise<LeadsZappResponseModel>;
}
