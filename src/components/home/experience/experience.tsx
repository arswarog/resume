import type { ReactNode } from 'react';

import { assetUrl } from '@/lib/urls';

interface ExperienceProps {
    readonly icon: string;
    readonly role: string;
    readonly location: string;
    readonly time: string;
    readonly children: ReactNode;
}

export function Experience({ icon, role, location, time, children }: ExperienceProps) {
    return (
        <div className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
            <img
                src={assetUrl(icon)}
                alt="icon"
                width={32}
                height={19}
            />
            <div className="flex flex-wrap gap-5 items-center justify-between">
                <h5>{role}</h5>
                <div className="flex items-center gap-2.5 border border-border rounded-lg py-1.5 px-3">
                    <div className="w-4 h-2 rounded-sm bg-primary/10" />
                    <p className="text-sm xs:text-base text-primary">
                        {time} · {location}
                    </p>
                </div>
            </div>
            <ul>{children}</ul>
        </div>
    );
}
