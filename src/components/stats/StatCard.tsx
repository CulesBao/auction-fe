import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  valueColor?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  iconColor, 
  iconBgColor,
  valueColor 
}: StatCardProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className={`text-2xl font-bold mt-2 ${valueColor || ''}`}>
              {value}
            </p>
          </div>
          <div className={`h-12 w-12 rounded-full ${iconBgColor} flex items-center justify-center`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
