import { assetUrl } from '@/lib/urls';

interface SideProjectItemProps {
    readonly name: string;
    readonly href?: string;
    readonly comingSoon?: boolean;
}

export function SideProjectItem({ name, href, comingSoon }: SideProjectItemProps) {
    const content = (
        <div className="group flex flex-wrap items-center gap-2">
            <h4 className={comingSoon ? 'text-muted-foreground' : 'text-primary'}>{name}</h4>
            {!comingSoon ? (
                <img
                    src={assetUrl('/images/icon/tile-arrow-icon.svg')}
                    alt="tile-icon"
                    width={24}
                    height={24}
                    className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                />
            ) : (
                <div className="py-1.5 px-3 bg-muted rounded-lg">
                    <p className="text-xs md:text-base font-normal text-muted-foreground">
                        Coming Soon
                    </p>
                </div>
            )}
        </div>
    );

    if (comingSoon) {
        return <div>{content}</div>;
    }

    return (
        <a
            href={href}
            className="group"
        >
            {content}
        </a>
    );
}
