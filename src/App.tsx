import { Divider } from '@/components/divider';
import { AboutMeBlock } from '@/components/home/about-me';
import { EducationBlock } from '@/components/home/education';
import { ExperienceBlock } from '@/components/home/experience';
import { FeaturedWorkBlock } from '@/components/home/featured-work';
import { HeroSectionBlock } from '@/components/home/hero-section';
import { ProjectOverviewBlock } from '@/components/home/project-overview';
import { Footer } from '@/components/layout/footer';

export function App() {
    return (
        <>
            <main>
                <HeroSectionBlock />
                <Divider />
                <AboutMeBlock />
                <Divider />
                <FeaturedWorkBlock />
                <Divider />
                <ExperienceBlock />
                <Divider />
                <EducationBlock />
                <Divider />
                <ProjectOverviewBlock />
                <Divider />
            </main>
            <Footer />
        </>
    );
}
