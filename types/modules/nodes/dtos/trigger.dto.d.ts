import { z } from 'zod';
import { actionType } from './action.dto';
export declare enum eventType {
    DELIVERING = "Entrega",
    VIEWING = "Visualiza\u00E7\u00E3o",
    CLICKING = "Click",
    REPLYING = "Resposta",
    SEQUENCE_END = "Final de Funil",
    BUTTON = "Bot\u00E3o",
    CONDITIONAL = "Condicional"
}
declare const triggerData: z.ZodObject<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export declare const triggerForAsyncCreationSchema: z.ZodObject<z.extendShape<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, {
    actions: z.ZodArray<z.ZodObject<z.extendShape<Omit<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "tagsToApply" | "tagsToRemove">, {
        tag: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        actionReactFlowId: z.ZodOptional<z.ZodString>;
        leadloversId: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export declare const triggerDBOutputSchema: z.ZodObject<z.extendShape<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, {
    actions: z.ZodArray<z.ZodObject<z.extendShape<Omit<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "tagsToApply" | "tagsToRemove">, {
        tag: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        actionReactFlowId: z.ZodOptional<z.ZodString>;
        leadloversId: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export declare const triggerOutputSchema: z.ZodObject<z.extendShape<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, {
    actions: z.ZodEffects<z.ZodArray<z.ZodObject<z.extendShape<Omit<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "tagsToApply" | "tagsToRemove">, {
        tag: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        actionReactFlowId: z.ZodOptional<z.ZodString>;
        leadloversId: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }>, "many">, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[], {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[]>;
}>, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export declare const createTriggerSchema: z.ZodEffects<z.ZodObject<z.extendShape<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, {
    actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[], {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[]>;
}>, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export declare const editTriggerSchema: z.ZodEffects<z.ZodObject<z.extendShape<{
    teste: z.ZodBoolean;
    machineId: z.ZodNumber;
    sequenceId: z.ZodString;
    messageId: z.ZodString;
    duplicationErrors: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        where: z.ZodLiteral<"actions">;
        what: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        where: "actions";
        what: string;
    }, {
        where: "actions";
        what: string;
    }>, "many">>>;
    buttonId: z.ZodOptional<z.ZodString>;
    height: z.ZodDefault<z.ZodNumber>;
    event: z.ZodNativeEnum<typeof eventType>;
    answer: z.ZodOptional<z.ZodString>;
    actions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">;
    timer: z.ZodOptional<z.ZodObject<{
        days: z.ZodDefault<z.ZodNumber>;
        hours: z.ZodDefault<z.ZodNumber>;
        minutes: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        days: number;
        hours: number;
        minutes: number;
    }, {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    }>>;
    active: z.ZodOptional<z.ZodBoolean>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        score: z.ZodOptional<z.ZodNumber>;
        tagId: z.ZodOptional<z.ZodNumber>;
        closeWindow: z.ZodOptional<z.ZodBoolean>;
        tagOperatorAnd: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }, {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }>, "many">>;
}, {
    actions: z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof actionType>;
        matchConditionals: z.ZodOptional<z.ZodBoolean>;
        tagsToApply: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>, "many">>;
        score: z.ZodOptional<z.ZodNumber>;
        move: z.ZodOptional<z.ZodObject<{
            machine: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>;
            funnel: z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            }>;
            message: z.ZodOptional<z.ZodObject<{
                id: z.ZodDefault<z.ZodNumber>;
                name: z.ZodString;
                nodeId: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            }, {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        }, {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        }>>;
        assign: z.ZodOptional<z.ZodObject<{
            to: z.ZodEnum<["attendant", "team"]>;
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }, {
            id: number;
            name: string;
            to: "attendant" | "team";
        }>>;
        field: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        product: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>>;
        crm: z.ZodOptional<z.ZodObject<{
            board: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            column: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
            group: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
            }, {
                id: number;
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }, {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }, {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }>, "many">, {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[], {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[]>;
}>, "strip", z.ZodTypeAny, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>, {
    timer?: {
        days: number;
        hours: number;
        minutes: number;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    height: number;
    messageId: string;
    actions: {
        name?: string | undefined;
        matchConditionals?: boolean | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                nodeId?: string | undefined;
                index?: number | undefined;
                id: number;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                nodeId?: string | undefined;
                id: number;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        tag?: number | undefined;
        actionReactFlowId?: string | undefined;
        leadloversId?: number | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}, {
    height?: number | undefined;
    timer?: {
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
    } | undefined;
    active?: boolean | undefined;
    duplicationErrors?: {
        where: "actions";
        what: string;
    }[] | undefined;
    buttonId?: string | undefined;
    answer?: string | undefined;
    filters?: {
        score?: number | undefined;
        tagId?: number | undefined;
        closeWindow?: boolean | undefined;
        tagOperatorAnd?: boolean | undefined;
        type: number;
    }[] | undefined;
    sequenceId: string;
    machineId: number;
    messageId: string;
    actions: {
        matchConditionals?: boolean | undefined;
        tagsToApply?: {
            id: number;
            name: string;
        }[] | undefined;
        tagsToRemove?: {
            id: number;
            name: string;
        }[] | undefined;
        score?: number | undefined;
        move?: {
            message?: {
                id?: number | undefined;
                nodeId?: string | undefined;
                index?: number | undefined;
                name: string;
            } | undefined;
            machine: {
                id: number;
                name: string;
            };
            funnel: {
                id?: number | undefined;
                nodeId?: string | undefined;
                name: string;
            };
        } | undefined;
        assign?: {
            id: number;
            name: string;
            to: "attendant" | "team";
        } | undefined;
        field?: {
            id: number;
            name: string;
        } | undefined;
        product?: {
            id: number;
            name: string;
        } | undefined;
        crm?: {
            board?: {
                id: number;
                name: string;
            } | undefined;
            column?: {
                id: number;
                name: string;
            } | undefined;
            group?: {
                id: number;
                name: string;
            } | undefined;
        } | undefined;
        type: actionType;
        id: string;
    }[];
    teste: boolean;
    event: eventType;
}>;
export type TriggerData = z.infer<typeof triggerData>;
export type CreateTrigger = z.infer<typeof createTriggerSchema>;
export type EditTrigger = z.infer<typeof editTriggerSchema>;
export type TriggerForAsyncCreation = z.infer<typeof triggerForAsyncCreationSchema>;
export type TriggerDBOutput = z.infer<typeof triggerDBOutputSchema>;
export type TriggerOutput = z.infer<typeof triggerOutputSchema>;
export {};
