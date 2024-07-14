import { Flows } from '@prisma/client';
export declare class ListFlowByMachineIdService {
    execute(machineId: number): Promise<Flows | null>;
}
