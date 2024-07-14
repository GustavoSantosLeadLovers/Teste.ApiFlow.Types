/// <reference types="node" />
import { Express } from 'express';
import { CaptureContext } from '@sentry/types/types/scope';
import { TRPCError } from '@trpc/server';
export declare class ErrorHandler {
    private readonly app;
    constructor(app: Express);
    init(): void;
    requestHandler(): (req: import("http").IncomingMessage, res: import("http").ServerResponse<import("http").IncomingMessage>, next: (error?: any) => void) => void;
    traceHandler(): (req: import("http").IncomingMessage, res: import("http").ServerResponse<import("http").IncomingMessage>, next: (error?: any) => void) => void;
    static handle(exception: unknown): TRPCError;
    static handleException(exception: TRPCError, context?: CaptureContext): void;
}
