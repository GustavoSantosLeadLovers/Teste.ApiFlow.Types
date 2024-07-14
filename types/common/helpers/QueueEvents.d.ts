import { ConditionalTrigger } from '../providers/LeadLoversProvider/models/triggers/IListConditionalTriggerByIdRepository';
import { Trigger } from '../providers/LeadLoversProvider/models/triggers/IListTriggersByIdsRepository';
import { ActionDBOutput } from '../../modules/nodes/dtos/action.dto';
import { CreateMessage } from '../../modules/nodes/dtos/message.dto';
import { SequenceData } from '../../modules/nodes/dtos/sequence.dto';
import { eventType, TriggerDBOutput } from '../../modules/nodes/dtos/trigger.dto';
export type PublishFlowEvent = {
    machineId: number;
    flowId: string;
    userId: number;
    versionId: number;
    initialSequence: string;
    machineWhatsappApi: string;
};
export type MonitorFlowPublicationEvent = {
    flowId: string;
    versionId: number;
    sequenceIdsToPublish: string[];
    sequenceLeadloversIdsToRemove: number[];
    nextCheckTimestamp: Date;
};
export type PublishSequenceEvent = {
    flowId: string;
    userId: number;
    baseNodeId: string;
    versionNodeId: string;
    reactFlowId: string;
    baseNodeVersionId: number;
    publishingVersionId: number;
    isInitialSequence: boolean;
    leadloversId: number | null;
    machineWhatsappApi: string;
} & Pick<SequenceData, 'name' | 'machineId'>;
export type RemoveSequenceEvent = {
    baseNodeId: string;
    versionNodeId: string;
    funiCodi: number;
    flowId: string;
    publishingVersionId: number;
};
export type MonitorSequencePublicationEvent = {
    baseNodeId: string;
    versionNodeId: string;
    publishingVersionId: number;
    messages: {
        messageIdsToPublish: string[];
        messageLeadloversIdsToRemove: number[];
    };
    sequenceEndtrigger: {
        triggerIdsToPublish: string[];
        triggerLeadloversIdsToRemove: number[];
    };
    nextCheckTimestamp: Date;
};
export type PublishMessageEvent = {
    flowId: string;
    userId: number;
    baseNodeId: string;
    versionNodeId: string;
    reactFlowId: string;
    baseNodeVersionId: number;
    publishingVersionId: number;
    parentNode: string;
    leadloversId: number | null;
    machineWhatsappApi: string;
    sequenceNumber: number;
    funnelId: number;
} & Omit<CreateMessage, 'height'>;
export type RemoveMessageEvent = {
    baseNodeId: string;
    versionNodeId: string;
    modeCodi: number;
    machineId: number;
    funnelId: number;
    flowId: string;
    publishingVersionId: number;
};
export type MonitorMessagePublicationEvent = {
    baseNodeId: string;
    versionNodeId: string;
    publishingVersionId: number;
    triggerIdsToPublish: string[];
    triggerLeadloversIdsToRemove: number[];
    nextCheckTimestamp: Date;
};
export type PublishTriggerEvent = {
    flowId: string;
    userId: number;
    baseNodeId: string;
    versionNodeId: string;
    reactFlowId: string;
    baseNodeVersionId: number;
    publishingVersionId: number;
    funnelId: number;
    modelId: number;
    leadloversId: number | null;
    data: TriggerDBOutput;
};
export type RemoveTriggerEvent = {
    baseNodeId: string;
    versionNodeId: string;
    whatsAppTriggerId: number;
    whatsAppTriggerActions: ActionDBOutput[];
    flowId: string;
    publishingVersionId: number;
    event: eventType;
};
export type PublishListEvent = {
    userId: number;
    flowId: string;
    toMachineId: number;
    fromMachineId: number;
};
export type MonitorListPublicationEvent = {
    flowId: string;
    sequencesLength: number;
};
export type PublishFunnelEvent = {
    flowId: string;
    versionId: number;
    toMachineId: number;
    name: string;
    funiCodi: number;
    isInitial: boolean;
};
export type MonitorFunnelPublicationEvent = {
    flowId: string;
    sequenceId: string;
    messagesToPublish: string[];
};
export type PublishModelEvent = {
    toMachineId: number;
    flowId: string;
    versionId: number;
    parentNode: string;
    sequenceName: string;
    funiCodi: number;
};
export type MonitorModelPublicationEvent = {
    flowId: string;
    parentNode: string;
    messageId: string;
    triggersLength: number;
};
export type PublishWhatsAppTriggerEvent = {
    toMachineId: number;
    flowId: string;
    versionId: number;
    parentNode: string;
    messageId: string;
    messageName: string;
    triggers: {
        type: 'standard' | 'conditional';
        itens: Trigger[] | ConditionalTrigger[];
    };
};
