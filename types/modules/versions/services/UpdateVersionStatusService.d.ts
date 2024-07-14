import { flowStatus } from '../../flows/dtos/flow.dto';
export declare class UpdateVersionStatusService {
    execute(versionId: number, newStatus: flowStatus): Promise<void>;
}
