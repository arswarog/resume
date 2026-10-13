import { EducationContainer } from './education-container';
import { EducationItem } from './education-item';

export function EducationBlock() {
    return (
        <EducationContainer>
            <EducationItem
                date="Sep 2015 - May 2019"
                title="B.F.A. in Graphic Design"
                subtitle="Pratt Institute — Brooklyn, NY"
            />
            <EducationItem
                date="Mar 2021 - Aug 2021"
                title="UX Design Certificate"
                subtitle="Google UX Design - Coursera"
            />
            <EducationItem
                date="Jan 2020 - Mar 2020"
                title="Front-End Web Development Bootcamp"
                subtitle="General Assembly — New York, NY"
            />
        </EducationContainer>
    );
}
