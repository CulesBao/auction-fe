import { mediaApiClient } from './api.config';
import type {
    GetPresignedUrlRequest,
    GetPresignedUrlResponse,
    CreateMediaRequest,
    CreateMediaResponse,
} from '@/types/media';

export const mediaService = {
    async getPresignedUrl(params: GetPresignedUrlRequest): Promise<GetPresignedUrlResponse> {
        const response = await mediaApiClient.get('/media/presigned-url', { params });
        return response.data;
    },

    async createMedia(data: CreateMediaRequest): Promise<CreateMediaResponse> {
        const response = await mediaApiClient.post('/media', data);
        return response.data;
    },

    async uploadToPresignedUrl(presignedUrl: string, file: File): Promise<void> {
        await fetch(presignedUrl, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type,
            },
        });
    },
};
