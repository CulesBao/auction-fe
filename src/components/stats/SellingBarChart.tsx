import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

interface SellingData {
  month: string;
  revenue: number;
  itemsSold: number;
}

interface SellingBarChartProps {
  data: SellingData[];
}

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#10b981',
  },
  itemsSold: {
    label: 'Items Sold',
    color: '#256af4',
  },
  avgPrice: {
    label: 'Avg Price',
    color: '#f59e0b',
  },
};

export function SellingBarChart({ data }: SellingBarChartProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardHeader>
        <CardTitle>Selling Performance</CardTitle>
        <CardDescription>Your items sold and revenue generated</CardDescription>
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
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="itemsSold" fill="var(--color-itemsSold)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
