import type { ReactNode } from 'react';

import { assetUrl } from '@/lib/urls';

interface AboutMeContainerProps {
    readonly children: ReactNode;
}

export function AboutMeContainer({ children }: AboutMeContainerProps) {
    return (
        <section>
            <div className="container">
                <div
                    className="border-x border-border bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${assetUrl('/images/about-me/about-me-bg.svg')})`,
                    }}
                >
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
