import type { ReactNode } from 'react';

interface ProjectOverviewContainerProps {
    readonly children: ReactNode;
}

export function ProjectOverviewContainer({ children }: ProjectOverviewContainerProps) {
    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
