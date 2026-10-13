import type { ReactNode } from 'react';

import { appUrl, assetUrl } from '@/lib/urls';

interface FeaturedWorkItemProps {
    readonly image: string;
    readonly title: string;
    readonly description: string;
    readonly children: ReactNode;
}

export function FeaturedWorkItem({ image, title, description, children }: FeaturedWorkItemProps) {
    return (
        <div className="group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 md:even:border-l md:even:border-border">
            <a
                href={appUrl('/')}
                className="overflow-hidden"
            >
                <img
                    src={assetUrl(image)}
                    alt="Image"
                    width={490}
                    height={300}
                    className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </a>
            <div className="flex flex-col gap-1 sm:gap-2 px-2">
                <a href={appUrl('/')}>
                    <h4>{title}</h4>
                </a>
                <p>{description}</p>
                <div className="flex">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    );
}
