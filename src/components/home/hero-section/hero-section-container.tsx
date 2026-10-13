import type { ReactNode } from 'react';

import { assetUrl } from '@/lib/urls';

interface HeroSectionContainerProps {
    readonly children: ReactNode;
}

export function HeroSectionContainer({ children }: HeroSectionContainerProps) {
    return (
        <section>
            <div className="container">
                <div>
                    <div className="w-full h-72">
                        <img
                            src={assetUrl('/images/hero-sec/banner-bg-img.png')}
                            alt="banner-img"
                            width={1080}
                            height={267}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="border-x border-border">{children}</div>
                </div>
            </div>
        </section>
    );
}
