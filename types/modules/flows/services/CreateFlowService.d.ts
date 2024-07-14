import { CreateFlowDTO } from '../dtos/flow.dto';
import { Flows } from '@prisma/client';
type CreateFlow = {
    status?: string;
} & CreateFlowDTO;
export declare class CreateFlowService {
    execute(userId: number, inputData: CreateFlow): Promise<Flows>;
    private hasFlow;
}
export {};
