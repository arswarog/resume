import { Divider } from '@/components/divider';
import { AboutMeBlock } from '@/components/home/about-me';
import { EducationBlock } from '@/components/home/education';
import { ExperienceBlock } from '@/components/home/experience';
import { HeroSectionBlock } from '@/components/home/hero-section';

export function App() {
    return (
        <>
            <main>
                <HeroSectionBlock />
                <Divider />
                <AboutMeBlock />
                <Divider />
                <ExperienceBlock />
                <Divider />
                <EducationBlock />
                <Divider />
            </main>
        </>
    );
}
