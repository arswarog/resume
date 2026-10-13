import type { ReactNode } from 'react';

interface ProjectGroupProps {
    readonly title: string;
    readonly children: ReactNode;
}

export function ProjectGroup({ title, children }: ProjectGroupProps) {
    return (
        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                {title}
            </p>
            <div className="flex flex-col gap-2.5">{children}</div>
        </div>
    );
}
