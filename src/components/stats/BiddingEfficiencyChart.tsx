import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { ComposedChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

interface BuyingData {
  month: string;
  spending: number;
  itemsWon: number;
  bidsPlaced: number;
}

interface BiddingEfficiencyChartProps {
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

export function BiddingEfficiencyChart({ data }: BiddingEfficiencyChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Bidding Efficiency Analysis</CardTitle>
        <CardDescription>Compare bids placed vs items won over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <ComposedChart data={data}>
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
            <Bar dataKey="bidsPlaced" fill="var(--color-bidsPlaced)" radius={[4, 4, 0, 0]} />
            <Line 
              type="monotone" 
              dataKey="itemsWon" 
              stroke="var(--color-itemsWon)" 
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
