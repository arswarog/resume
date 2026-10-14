import { assetUrl } from '@/lib/urls';

interface SocialLinkProps {
    readonly href: string;
    readonly icon: string;
    readonly label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <a
            href={href}
            className="w-fit p-0.5 sm:p-1.5 hover:bg-primary/5 border border-border rounded-full"
        >
            <img
                src={assetUrl(icon)}
                alt={label}
                width={32}
                height={32}
            />
        </a>
    );
}
