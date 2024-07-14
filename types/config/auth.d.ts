export interface IAuthConfigs {
    jwt: {
        secret: string;
        expiresIn: string;
    };
}
export declare const authConfigs: IAuthConfigs;
