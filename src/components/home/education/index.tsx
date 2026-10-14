import { EducationContainer } from './education-container';
import { EducationItem } from './education-item';

export function EducationBlock() {
    return (
        <EducationContainer>
            <EducationItem
                date="2007 - 2012"
                title="Инженер АТПП"
                subtitle="Северо-Кавказский федеральный университет"
            />
        </EducationContainer>
    );
}
