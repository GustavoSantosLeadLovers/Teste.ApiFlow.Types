import { z } from 'zod';
export declare enum mediaType {
    imageJpeg = "image/jpeg",
    imagePng = "image/png",
    textPlain = "text/plain",
    applicationPdf = "application/pdf",
    applicationVndMsPowerpoint = "application/vnd.ms-powerpoint",
    applicationMsword = "application/msword",
    applicationVndMsExcel = "application/vnd.ms-excel",
    applicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    applicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    applicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    audioAac = "audio/aac",
    audioMp4 = "audio/mp4",
    audioMpeg = "audio/mpeg",
    audioAmr = "audio/amr",
    audioOgg = "audio/ogg",
    audioOpus = "audio/opus",
    audioWebM = "audio/webm",
    videoMp4 = "video/mp4",
    video3gp = "video/3gp",
    imageWebp = "image/webp"
}
declare const FileSchema: z.ZodObject<{
    base64: z.ZodString;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodNativeEnum<typeof mediaType>>;
    decodedBuffer: z.ZodOptional<z.ZodAny>;
    sizeInBytes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type?: mediaType | undefined;
    decodedBuffer?: any;
    sizeInBytes?: number | undefined;
    base64: string;
    name: string;
}, {
    type?: mediaType | undefined;
    decodedBuffer?: any;
    sizeInBytes?: number | undefined;
    base64: string;
    name: string;
}>;
export declare const UploadFilesSchema: z.ZodEffects<z.ZodObject<{
    flowId: z.ZodString;
    files: z.ZodArray<z.ZodObject<{
        base64: z.ZodString;
        name: z.ZodString;
        type: z.ZodOptional<z.ZodNativeEnum<typeof mediaType>>;
        decodedBuffer: z.ZodOptional<z.ZodAny>;
        sizeInBytes: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }, {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    flowId: string;
    files: {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }[];
}, {
    flowId: string;
    files: {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }[];
}>, {
    flowId: string;
    files: {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }[];
}, {
    flowId: string;
    files: {
        type?: mediaType | undefined;
        decodedBuffer?: any;
        sizeInBytes?: number | undefined;
        base64: string;
        name: string;
    }[];
}>;
export declare const UploadFileOutputSchema: z.ZodObject<{
    urls: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    urls: string[];
}, {
    urls: string[];
}>;
export type FileToUpload = z.infer<typeof FileSchema>;
export type UpdateFileDTO = z.infer<typeof UploadFilesSchema>;
export type UploadFileOutputDTO = z.infer<typeof UploadFileOutputSchema>;
export {};
