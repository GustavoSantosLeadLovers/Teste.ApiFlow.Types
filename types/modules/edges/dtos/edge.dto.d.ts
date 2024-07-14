import { z } from 'zod';
export declare enum edgeType {
    SIMPLE = "simple",
    SEQUENCE = "sequence",
    SEQUENCE_END = "sequence end",
    CLICK = "click",
    CLICK_LABEL = "clickLabel",
    VIEW = "view",
    REPLY = "reply",
    REPLY_VALUE = "replyValue",
    DELIVERY = "delivery",
    BUTTON_TRIGGER = "button trigger",
    CONDITIONAL = "conditional"
}
declare const dataFromEdge: z.ZodObject<{
    content: z.ZodString;
    sourceParentCode: z.ZodString;
    targetParentCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    sourceParentCode: string;
    targetParentCode: string;
}, {
    content: string;
    sourceParentCode: string;
    targetParentCode: string;
}>;
export declare const CreateEdgeSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    source: z.ZodString;
    target: z.ZodString;
    markerStart: z.ZodDefault<z.ZodString>;
    markerEnd: z.ZodDefault<z.ZodString>;
    sourceParentCode: z.ZodString;
    targetParentCode: z.ZodString;
    type: z.ZodNativeEnum<typeof edgeType>;
    sourceHandle: z.ZodOptional<z.ZodString>;
    targetHandle: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    labelStyle: z.ZodOptional<z.ZodString>;
    labelShowBg: z.ZodOptional<z.ZodBoolean>;
    labelBgStyle: z.ZodOptional<z.ZodString>;
    labelBgPadding: z.ZodOptional<z.ZodString>;
    labelBgBorderRadius: z.ZodOptional<z.ZodNumber>;
    style: z.ZodOptional<z.ZodString>;
    animated: z.ZodOptional<z.ZodBoolean>;
    hidden: z.ZodOptional<z.ZodBoolean>;
    deletable: z.ZodOptional<z.ZodBoolean>;
    focusable: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodOptional<z.ZodString>;
    className: z.ZodOptional<z.ZodString>;
    sourceNode: z.ZodOptional<z.ZodString>;
    targetNode: z.ZodOptional<z.ZodString>;
    selected: z.ZodOptional<z.ZodBoolean>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    ariaLabel: z.ZodOptional<z.ZodString>;
    interactionWidth: z.ZodOptional<z.ZodNumber>;
}, {
    id: z.ZodString;
    flowId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    data?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    id: string;
}, {
    data?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    id: string;
}>, {
    reactFlowId: string;
    data?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    id: string;
}, {
    data?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    id: string;
}>, {
    reactFlowId: string;
    data?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    id: string;
}, {
    data?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    sourceParentCode: string;
    targetParentCode: string;
    type: edgeType;
    source: string;
    target: string;
    id: string;
}>;
export declare const EditEdgeSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<z.extendShape<{
    source: z.ZodOptional<z.ZodString>;
    target: z.ZodOptional<z.ZodString>;
    markerStart: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    markerEnd: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    sourceParentCode: z.ZodOptional<z.ZodString>;
    targetParentCode: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof edgeType>>;
    sourceHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    targetHandle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    label: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    labelStyle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    labelShowBg: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    labelBgStyle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    labelBgPadding: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    labelBgBorderRadius: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    style: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    animated: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    hidden: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    deletable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    focusable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    data: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    className: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    sourceNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    targetNode: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    selected: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    zIndex: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    ariaLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    interactionWidth: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, {
    id: z.ZodString;
    flowId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}, {
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}>, {
    reactFlowId: string;
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}, {
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}>, {
    reactFlowId: string;
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}, {
    data?: string | undefined;
    sourceParentCode?: string | undefined;
    targetParentCode?: string | undefined;
    type?: edgeType | undefined;
    source?: string | undefined;
    target?: string | undefined;
    markerStart?: string | undefined;
    markerEnd?: string | undefined;
    sourceHandle?: string | undefined;
    targetHandle?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    labelShowBg?: boolean | undefined;
    labelBgStyle?: string | undefined;
    labelBgPadding?: string | undefined;
    labelBgBorderRadius?: number | undefined;
    style?: string | undefined;
    animated?: boolean | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    sourceNode?: string | undefined;
    targetNode?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    interactionWidth?: number | undefined;
    flowId: string;
    id: string;
}>;
export declare const EditEdgeHiddenSchema: z.ZodObject<{
    flowId: z.ZodString;
    ids: z.ZodArray<z.ZodString, "many">;
    value: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    value: boolean;
    ids: string[];
}, {
    flowId: string;
    value: boolean;
    ids: string[];
}>;
export declare const RemoveEdgeSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString, "many">;
    flowId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    ids: string[];
}, {
    flowId: string;
    ids: string[];
}>;
export declare const EdgeSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    reactFlowId: z.ZodString;
    source: z.ZodString;
    target: z.ZodString;
    markerStart: z.ZodString;
    markerEnd: z.ZodString;
    sourceParentCode: z.ZodString;
    targetParentCode: z.ZodString;
    versionId: z.ZodNumber;
    type: z.ZodNullable<z.ZodString>;
    sourceHandle: z.ZodNullable<z.ZodString>;
    targetHandle: z.ZodNullable<z.ZodString>;
    label: z.ZodNullable<z.ZodString>;
    labelStyle: z.ZodNullable<z.ZodString>;
    labelShowBg: z.ZodNullable<z.ZodBoolean>;
    labelBgStyle: z.ZodNullable<z.ZodString>;
    labelBgPadding: z.ZodNullable<z.ZodString>;
    labelBgBorderRadius: z.ZodNullable<z.ZodNumber>;
    style: z.ZodNullable<z.ZodString>;
    animated: z.ZodNullable<z.ZodBoolean>;
    hidden: z.ZodNullable<z.ZodBoolean>;
    deletable: z.ZodNullable<z.ZodBoolean>;
    focusable: z.ZodNullable<z.ZodBoolean>;
    data: z.ZodNullable<z.ZodString>;
    className: z.ZodNullable<z.ZodString>;
    sourceNode: z.ZodNullable<z.ZodString>;
    targetNode: z.ZodNullable<z.ZodString>;
    selected: z.ZodNullable<z.ZodBoolean>;
    zIndex: z.ZodNullable<z.ZodNumber>;
    ariaLabel: z.ZodNullable<z.ZodString>;
    interactionWidth: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    id: string;
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    id: string;
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    data: {
        content: string | null;
        sourceParentCode: string;
        targetParentCode: string;
        versionId: number;
    };
    id: string;
    versionId: number;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    data: {
        content: string | null;
        sourceParentCode: string;
        targetParentCode: string;
        versionId: number;
    };
    id: string;
    versionId: number;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    data: {
        content: string | null;
        sourceParentCode: string;
        targetParentCode: string;
        versionId: number;
    };
    id: string;
    versionId: number;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>, {
    data: {
        content: string | null;
        sourceParentCode: string;
        targetParentCode: string;
        versionId: number;
    };
    id: string;
    versionId: number;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    reactFlowId: string;
}, {
    versionId: number;
    data: string | null;
    sourceParentCode: string;
    targetParentCode: string;
    type: string | null;
    source: string;
    target: string;
    markerStart: string;
    markerEnd: string;
    sourceHandle: string | null;
    targetHandle: string | null;
    label: string | null;
    labelStyle: string | null;
    labelShowBg: boolean | null;
    labelBgStyle: string | null;
    labelBgPadding: string | null;
    labelBgBorderRadius: number | null;
    style: string | null;
    animated: boolean | null;
    hidden: boolean | null;
    deletable: boolean | null;
    focusable: boolean | null;
    className: string | null;
    sourceNode: string | null;
    targetNode: string | null;
    selected: boolean | null;
    zIndex: number | null;
    ariaLabel: string | null;
    interactionWidth: number | null;
    id: string;
    reactFlowId: string;
}>;
export type CreateEdgeDTO = z.infer<typeof CreateEdgeSchema>;
export type EditEdgeDTO = z.infer<typeof EditEdgeSchema>;
export type EditEdgeHiddenDTO = z.infer<typeof EditEdgeHiddenSchema>;
export type RemoveEdgeDTO = z.infer<typeof RemoveEdgeSchema>;
export type DataFromEdge = z.infer<typeof dataFromEdge>;
export type EdgeDTO = z.infer<typeof EdgeSchema>;
export {};
