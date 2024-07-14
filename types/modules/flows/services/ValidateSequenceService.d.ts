import { NodeVersions } from '.prisma/client';
import { CustomTRPCError } from '../../../common/helpers/CustomTRPCError';
export declare class ValidateSequenceService {
    execute(flowId: string, versionId: number, sequence: NodeVersions): Promise<CustomTRPCError[]>;
}
