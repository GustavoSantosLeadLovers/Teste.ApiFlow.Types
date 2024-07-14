import 'dotenv/config';
export interface IConnection {
    server: string;
    port: number;
    database: string;
    user: string;
    password: string;
    requestTimeout: number;
    connectionTimeout: number;
    options: {
        trustServerCertificate: boolean;
    };
}
export interface IDatabase {
    name: string;
    connection: IConnection;
}
declare const _default: {
    databases: IDatabase[];
};
export default _default;
