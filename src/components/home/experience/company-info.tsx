import { assetUrl } from '@/lib/urls';

interface CompanyInfoProps {
    readonly icon: string;
    readonly name: string;
    readonly description: string;
    readonly location: string;
}

export function CompanyInfo({ icon, name, description, location }: CompanyInfoProps) {
    return (
        <div className="flex items-start gap-3">
            <img
                src={assetUrl(icon)}
                className="rounded-md"
                alt="icon"
                width={32}
                height={32}
            />
            <div className="flex flex-col gap-0.5">
                <p className="text-sm text-primary">{name}</p>
                <p className="text-sm text-muted-foreground">
                    {description} · {location}
                </p>
            </div>
        </div>
    );
}
