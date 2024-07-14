import { EditFlowDTO } from '../dtos/flow.dto';
import { Flows } from '@prisma/client';
export declare class EditFlowService {
    execute(inputData: EditFlowDTO): Promise<Flows>;
}
