export declare enum defaultDelayTime {
    FLOW = 60000,
    SEQUENCE = 60000,
    MESSAGE = 60000
}
export declare const delay: (miliseconds: number) => Promise<void>;
