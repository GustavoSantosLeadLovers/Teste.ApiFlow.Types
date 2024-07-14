import { whatsappApi } from '../dtos/flow.dto';
export declare class ListWhatsappAuthenticationService {
    execute(userId: number, machineId: number): Promise<whatsappApi.CLOUD_API | whatsappApi.QRCODE>;
}
