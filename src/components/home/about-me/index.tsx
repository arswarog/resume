import { AboutMeContainer } from './about-me-container';
import { ServiceBadge } from './service-badge';

export function AboutMeBlock() {
    return (
        <AboutMeContainer>
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Обо мне</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                    Senior Frontend Engineer с 6 лет опыта в финтехе (coretech).
                </h2>
                <h3>
                    Разрабатываю{' '}
                    <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                        высоконагруженные
                    </span>{' '}
                    инструменты для продуктовых команд, документирую решения и менторирую
                    middle/junior разработчиков.
                    <hr />
                </h3>
                <h5 className="text-secondary font-normal">
                    Специализируюсь на{' '}
                    <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                        проектировании
                    </span>{' '}
                    frontend-архитектуры (
                    <span className="border-b-2">модульность, AFF, BFF, стейт менеджеры</span>),
                    стандартизации контрактов с backend и внедрении инженерных практик (
                    <span className="border-b-2">TDD, CI/CD, performance audit</span>).
                </h5>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Навыки</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <ServiceBadge>Agentic programming</ServiceBadge>
                    <ServiceBadge>Архитектура</ServiceBadge>
                    <ServiceBadge>RAG</ServiceBadge>
                    <ServiceBadge>React</ServiceBadge>
                    <ServiceBadge>TypeScript</ServiceBadge>
                    <ServiceBadge>Docker</ServiceBadge>
                    <ServiceBadge>CI/CD</ServiceBadge>
                    <ServiceBadge>UX</ServiceBadge>
                    <ServiceBadge>GIT</ServiceBadge>
                    <ServiceBadge>Node.js</ServiceBadge>
                    <ServiceBadge>State manager</ServiceBadge>
                    <ServiceBadge>REST</ServiceBadge>
                    <ServiceBadge>RxJs</ServiceBadge>
                    <ServiceBadge>Redux</ServiceBadge>
                    <ServiceBadge>FSD</ServiceBadge>
                    <ServiceBadge>FEOD</ServiceBadge>
                </div>
            </div>
        </AboutMeContainer>
    );
}
