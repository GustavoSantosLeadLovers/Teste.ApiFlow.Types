/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="node" />
/// <reference types="ws" />
import { inferAsyncReturnType } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';
export declare const context: ({ req, res }: CreateExpressContextOptions | CreateWSSContextFnOptions) => {
    req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> | import("http").IncomingMessage;
    res: import("express").Response<any, Record<string, any>> | import("ws");
    user: {
        key: string;
    } | undefined;
};
export type Context = inferAsyncReturnType<typeof context>;
