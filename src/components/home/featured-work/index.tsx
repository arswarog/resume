import { FeaturedWorkContainer } from './featured-work-container';
import { FeaturedWorkItem } from './featured-work-item';

export function FeaturedWorkBlock() {
    return (
        <FeaturedWorkContainer>
            <FeaturedWorkItem
                image="/images/feature-work/feature-img-1.png"
                title="Branding + Web Design for Cleaning Services"
                description="Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability."
            >
                UX Designer, Framer Designer
            </FeaturedWorkItem>
            <FeaturedWorkItem
                image="/images/feature-work/feature-img-2.png"
                title="Brand Identity for a Health Care Company"
                description="Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider."
            >
                UX Designer, Framer Designer
            </FeaturedWorkItem>
        </FeaturedWorkContainer>
    );
}
