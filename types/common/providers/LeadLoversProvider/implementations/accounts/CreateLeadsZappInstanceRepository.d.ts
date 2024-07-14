import { ICreateLeadsZappInstanceRepository, LeadsZappCreateInstanceRequestModel, LeadsZappCreateInstanceResponseModel } from '../../models/accounts/ICreateLeadsZappInstanceRepository';
export declare class CreateLeadsZappInstanceRepository implements ICreateLeadsZappInstanceRepository {
    edit(data: LeadsZappCreateInstanceRequestModel): Promise<LeadsZappCreateInstanceResponseModel>;
}
