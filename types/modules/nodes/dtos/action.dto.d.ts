import { z } from 'zod';
export declare enum actionType {
    ADD_LEAD = "adicionar o lead em outra m\u00E1quina/funil/sequ\u00EAncia",
    ADD_TAG = "Aplicar Tag",
    APPLY_OR_REMOVE_TAGS = "Adicionar ou remover tags",
    ARCHIVE_CONVERSATION = "Arquivar conversa do lead",
    ASSIGN_TO_ATTENDAT = "Atribuir conversa a um atendente",
    COPY_TO_ANOTHER_MACHINE = "Copiar para outra m\u00E1quina",
    INSERT_INTO_EAD = "Inserir lead no EAD",
    LINK_ANSWER = "Vincular resposta",
    LINK_ANSWER_IN_LEAD_FIELD = "Vincular resposta em um campo do lead",
    MOVE = "mover o lead para outra m\u00E1quina/funil/sequ\u00EAncia",
    MOVE_BY_CONDITIONAL_TRIGGER = "mover o lead usando gatilho condicional",
    REMOVE_FROM_THIS_MACHINE = "Remover desta m\u00E1quina",
    REMOVE_FROM_THIS_SEQUENCE = "Remover desta sequ\u00EAncia",
    REMOVE_LEAD_FROM_FUNNEL = "remover o lead do funil atual",
    REMOVE_LEAD_FROM_MACHINE = "remover o lead da m\u00E1quina atual",
    REMOVE_TAG = "Remover Tag",
    SCORE = "Aplicar LeadScore",
    SEND_TO_CRM = "Enviar para CRM",
    SEND_TO_CRM_GROUP = "Enviar para Grupo CRM"
}
export declare const actionBase: z.ZodObject<{
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
}>;
export declare const actionBaseSchema: z.ZodObject<{
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
}>;
export declare const createActionSchema: z.ZodEffects<z.ZodObject<{
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
}>;
export declare const editActionSchema: z.ZodEffects<z.ZodObject<{
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
}>;
export declare const actionForAsyncCreationSchema: z.ZodObject<z.extendShape<Omit<{
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
}>;
export declare const actionDBOutputSchema: z.ZodObject<z.extendShape<Omit<{
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
}>;
export declare const actionOutputSchema: z.ZodObject<{
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
}>;
export type ActionData = z.infer<typeof actionBaseSchema>;
export type CreateAction = z.infer<typeof createActionSchema>;
export type EditAction = z.infer<typeof editActionSchema>;
export type ActionFromAsyncCreation = z.infer<typeof actionForAsyncCreationSchema>;
export type ActionDBOutput = z.infer<typeof actionDBOutputSchema>;
export type ActionOutput = z.infer<typeof actionOutputSchema>;
