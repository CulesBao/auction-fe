import { apiClient } from './api.config';
import type { UserStatistics, GetStatisticsParams } from '@/types/statistics';

export const getMyStatistics = async (
    params: GetStatisticsParams
): Promise<UserStatistics> => {
    const response = await apiClient.get<UserStatistics>(
        '/items/me/statistics',
        { params }
    );
    return response.data;
};

export const statisticsService = {
    getMyStatistics,
};
