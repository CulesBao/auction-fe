export interface WinningBidItem {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    ownerName: string;
    startingPrice: string;
    startTime: string;
    endTime: string;
    finalPrice: string;
    winnerId: string;
    createdAt: string;
    updatedAt: string;
}

export type GetWinningBidsByUserIdResponseDto = WinningBidItem[];
