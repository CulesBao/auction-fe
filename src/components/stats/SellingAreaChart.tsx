import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

interface SellingData {
  month: string;
  revenue: number;
  itemsSold: number;
}

interface SellingAreaChartProps {
  data: SellingData[];
}

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#10b981',
  },
};

export function SellingAreaChart({ data }: SellingAreaChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Selling Revenue Trend</CardTitle>
        <CardDescription>Monthly revenue flow from sold items</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
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
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
