export interface ICacheConfig {
    redis: {
        flow: {
            host: string;
            port: number;
            password?: string;
        };
        leadlovers_master: {
            host: string;
            port: number;
            password?: string;
        };
    };
}
export declare const cacheConfigs: ICacheConfig;
