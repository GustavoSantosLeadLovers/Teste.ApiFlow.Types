import { Nodes } from '@prisma/client';
export declare class ListSequencesService {
    execute(flowId: string): Promise<Nodes[]>;
}
