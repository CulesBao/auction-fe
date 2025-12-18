import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

interface TrendData {
  month: string;
  selling: number;
  buying: number;
  profit: number;
}

interface TrendLineChartProps {
  data: TrendData[];
}

const chartConfig = {
  selling: {
    label: 'Selling',
    color: '#10b981',
  },
  buying: {
    label: 'Buying',
    color: '#ef4444',
  },
  profit: {
    label: 'Net Profit',
    color: '#256af4',
  },
};

export function TrendLineChart({ data }: TrendLineChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Financial Trend Overview</CardTitle>
        <CardDescription>Compare your selling and buying activities</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart data={data}>
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
            <Line 
              type="monotone" 
              dataKey="selling" 
              stroke="var(--color-selling)" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="buying" 
              stroke="var(--color-buying)" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="var(--color-profit)" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
