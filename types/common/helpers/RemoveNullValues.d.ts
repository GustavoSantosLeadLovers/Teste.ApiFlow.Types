type Valuable<T> = {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};
export declare function removeNullValues<T extends object, V = Valuable<T>>(object: T): V;
export {};
