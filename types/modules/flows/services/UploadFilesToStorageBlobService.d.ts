import { FileToUpload } from '../dtos/upload.dto';
export declare class UploadFilesToStorageBlob {
    private containerClient;
    execute(userId: number, files: FileToUpload[]): Promise<string[]>;
    private getContainerClient;
    private validateFile;
    private uploadToStorageBlob;
    private delay;
}
