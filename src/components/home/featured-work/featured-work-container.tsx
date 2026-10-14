import type { ReactNode } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { appUrl } from '@/lib/urls';

interface FeaturedWorkContainerProps {
    readonly children: ReactNode;
}

export function FeaturedWorkContainer({ children }: FeaturedWorkContainerProps) {
    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Featured work
                            </p>
                            <a
                                href={appUrl('/')}
                                className={buttonVariants({
                                    variant: 'outline',
                                    className: 'h-auto py-3 px-5',
                                })}
                            >
                                Download Portfolio
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
