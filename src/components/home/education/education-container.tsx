import type { ReactNode } from 'react';

interface EducationContainerProps {
    readonly children: ReactNode;
}

export function EducationContainer({ children }: EducationContainerProps) {
    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Образование
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-border">
                        <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
                            <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />
                            <div className="relative">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
