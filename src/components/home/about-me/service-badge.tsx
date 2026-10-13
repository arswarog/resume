import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';

interface ServiceBadgeProps {
    readonly children: ReactNode;
}

export function ServiceBadge({ children }: ServiceBadgeProps) {
    return (
        <Badge
            variant="outline"
            className="py-1.5 px-3 rounded-lg h-full"
        >
            <p className="text-xs sm:text-sm font-medium text-primary">{children}</p>
        </Badge>
    );
}
