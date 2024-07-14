import mssql from 'mssql';
export declare function mssqlPoolConnect(databaseName?: string): Promise<mssql.ConnectionPool>;
