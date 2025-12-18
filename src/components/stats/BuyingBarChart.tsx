import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

interface BuyingData {
  month: string;
  spending: number;
  itemsWon: number;
  bidsPlaced: number;
}

interface BuyingBarChartProps {
  data: BuyingData[];
}

const chartConfig = {
  spending: {
    label: 'Spending',
    color: '#ef4444',
  },
  itemsWon: {
    label: 'Items Won',
    color: '#8b5cf6',
  },
  bidsPlaced: {
    label: 'Bids Placed',
    color: '#06b6d4',
  },
};

export function BuyingBarChart({ data }: BuyingBarChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Buying Activity</CardTitle>
        <CardDescription>Your bidding and winning statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis 
              stroke="#9ca3af"
              fontSize={12}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="spending" fill="var(--color-spending)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="itemsWon" fill="var(--color-itemsWon)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
