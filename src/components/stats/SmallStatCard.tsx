import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface SmallStatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
}

export function SmallStatCard({ 
  title, 
  value, 
  icon: Icon, 
  iconColor, 
  iconBgColor 
}: SmallStatCardProps) {
  return (
    <Card className="bg-[#242424] border-gray-800">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className={`h-10 w-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
