type ErrorCode = 'FUNNEL_EXISTS' | 'UNLIKED_ACCOUNT';
type LeadLoversCustomError = {
    [key in ErrorCode]: Error;
};
export declare const LeadLoversCustomErrors: LeadLoversCustomError;
export {};
