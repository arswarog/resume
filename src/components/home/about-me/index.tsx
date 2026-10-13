import { AboutMeContainer } from './about-me-container';
import { ServiceBadge } from './service-badge';

export function AboutMeBlock() {
    return (
        <AboutMeContainer>
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                    About Me
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                    Hey there. I&apos;m Elena — UX/UI designer based in Brooklyn, currently{' '}
                    <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                        crafting digital products
                    </span>{' '}
                    at <span className="border-b-2">WrapPixel</span>, a SaaS startup focused on
                    productivity tools.
                </h2>
                <h5 className="text-secondary font-normal">
                    Previously at Oak Studio, and creator of DesignKit and MentalWell.
                </h5>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm text-primary uppercase font-medium">Services</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <ServiceBadge>Graphic Design</ServiceBadge>
                    <ServiceBadge>User Experience</ServiceBadge>
                    <ServiceBadge>Mobile App Design</ServiceBadge>
                    <ServiceBadge>Brand Identity</ServiceBadge>
                    <ServiceBadge>Responsive Design</ServiceBadge>
                    <ServiceBadge>Prototyping</ServiceBadge>
                    <ServiceBadge>Illustration</ServiceBadge>
                    <ServiceBadge>Motion Graphics</ServiceBadge>
                    <ServiceBadge>Print Design</ServiceBadge>
                    <ServiceBadge>UI Development</ServiceBadge>
                    <ServiceBadge>Interactive Media</ServiceBadge>
                </div>
            </div>
        </AboutMeContainer>
    );
}
