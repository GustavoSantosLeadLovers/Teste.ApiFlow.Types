import { ICacheProvider } from '../models/ICacheProvider';
export declare class FakeCacheProvider implements ICacheProvider {
    private cache;
    invalidate(key: string): Promise<void>;
    invalidatePrefix(prefix: string): Promise<void>;
    recover<T>(key: string): Promise<T | undefined>;
    save<T>(key: string, value: T): Promise<void>;
}
