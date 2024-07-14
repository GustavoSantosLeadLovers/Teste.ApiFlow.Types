export interface ICacheProvider {
    invalidate(key: string): Promise<void>;
    invalidatePrefix(prefix: string): Promise<void>;
    recover<T>(key: string): Promise<T | undefined>;
    save<T>(key: string, value: T, ttl?: number): Promise<void>;
}
