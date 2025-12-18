import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import { statisticsService } from '@/services/statistics.service';
import type { UserStatistics, GetStatisticsParams } from '@/types/statistics';

export function useStatistics(
    params: GetStatisticsParams,
    enabled: boolean = true
): UseQueryResult<UserStatistics, Error> {
    return useQuery({
        queryKey: ['statistics', params.startDate, params.endDate],
        queryFn: () => statisticsService.getMyStatistics(params),
        enabled: enabled && !!params.startDate && !!params.endDate,
        staleTime: 5 * 60 * 1000,
    });
}
