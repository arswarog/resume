import { CaseStudyItem } from './case-study-item';
import { ProjectGroup } from './project-group';
import { ProjectOverviewContainer } from './project-overview-container';
import { SideProjectItem } from './side-project-item';

export function ProjectOverviewBlock() {
    return (
        <ProjectOverviewContainer>
            <ProjectGroup title="Case studies">
                <CaseStudyItem
                    name="Wellnest"
                    href="#"
                />
                <CaseStudyItem
                    name="ScoutHire"
                    href="#"
                />
            </ProjectGroup>
            <ProjectGroup title="Side Projects">
                <SideProjectItem
                    name="Formless"
                    href="#"
                />
                <SideProjectItem
                    name="Gridsnap"
                    comingSoon
                />
                <SideProjectItem
                    name="OrbitPay Mobile App"
                    comingSoon
                />
                <SideProjectItem
                    name="Siteflow Page Builder"
                    comingSoon
                />
            </ProjectGroup>
        </ProjectOverviewContainer>
    );
}
