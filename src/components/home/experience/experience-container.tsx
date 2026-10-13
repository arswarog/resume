import type { ReactNode } from 'react';

interface ExperienceContainerProps {
    readonly children: ReactNode;
}

export function ExperienceContainer({ children }: ExperienceContainerProps) {
    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Опыт работы
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-border">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
