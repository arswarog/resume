interface EducationItemProps {
    readonly date: string;
    readonly title: string;
    readonly subtitle: string;
}

export function EducationItem({ date, title, subtitle }: EducationItemProps) {
    return (
        <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 mb-8 sm:mb-16 last:mb-0">
            <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                    {date}
                </p>
                <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-border rounded-full bg-white">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                <h5 className="font-semibold">{title}</h5>
                <p className="text-primary">{subtitle}</p>
            </div>
        </div>
    );
}
