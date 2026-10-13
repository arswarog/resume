import type { ReactNode } from 'react';

interface ExperienceItemProps {
    readonly children: ReactNode;
}

export function ExperienceItem({ children }: ExperienceItemProps) {
    return (
        <li className="flex items-start gap-2 text-base font-normal text-muted-foreground">
            <span className="w-2.5 h-2.5 text-muted-foreground">•</span>
            {children}
        </li>
    );
}
