import { assetUrl } from '@/lib/urls';

interface CaseStudyItemProps {
    readonly name: string;
    readonly href: string;
}

export function CaseStudyItem({ name, href }: CaseStudyItemProps) {
    return (
        <a
            href={href}
            className="group flex items-center gap-2"
        >
            <h4>{name}</h4>
            <img
                src={assetUrl('/images/icon/tile-arrow-icon.svg')}
                alt="tile-icon"
                width={24}
                height={24}
                className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
            />
        </a>
    );
}
