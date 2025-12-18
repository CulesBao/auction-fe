// Statistics types matching API response

export interface MonthlyStatistics {
    month: string; // YYYY-MM format
    revenue: number;
    itemSold: number;
    spending: number;
    itemsWon: number;
    bidsPlaced: number;
}

export interface UserStatistics {
    // Selling side
    totalRevenue: number;
    totalItemsSold: number;

    // Buying side
    totalSpending: number;
    totalItemsWon: number;
    totalBidsPlaced: number;

    // Monthly breakdown
    monthlySalesReports: MonthlyStatistics[];
}

export interface GetStatisticsParams {
    startDate: string; // ISO format YYYY-MM-DD
    endDate: string; // ISO format YYYY-MM-DD
}
