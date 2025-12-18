import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

interface BuyingData {
  month: string;
  spending: number;
  itemsWon: number;
  bidsPlaced: number;
}

interface BuyingAreaChartProps {
  data: BuyingData[];
}

const chartConfig = {
  spending: {
    label: 'Spending',
    color: '#ef4444',
  },
};

export function BuyingAreaChart({ data }: BuyingAreaChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Buying Spending Trend</CardTitle>
        <CardDescription>Monthly spending on won items</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
            <Area 
              type="monotone" 
              dataKey="spending" 
              stroke="#ef4444" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorSpending)" 
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
