import { CreateNodeDTO } from '../../modules/nodes/dtos/nodeInput.dto';
export declare class Guard {
    static againstSequencesWithSameName(internReferenceId: string, node: CreateNodeDTO): Promise<void>;
}
