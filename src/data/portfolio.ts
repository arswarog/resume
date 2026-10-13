export type Experience = Readonly<{
    icon: string;
    role: string;
    location: string;
    startYear: string;
    endYear: string;
    bulletPoints: readonly string[];
}>;

export type Education = Readonly<{
    date: string;
    title: string;
    subtitle: string;
}>;

export type FeaturedWork = Readonly<{
    title: string;
    description: string;
    roles: readonly string[];
    image: string;
}>;

export type Project = Readonly<{
    name: string;
    url?: string;
    comingSoon?: boolean;
}>;

export type ProjectOverview = Readonly<{
    caseStudies: readonly Project[];
    sideProjects: readonly Project[];
}>;

export const experienceData = [
    {
        icon: '/images/companies/tbank.png',
        role: 'Старший coretech разработчик',
        location: 'Удаленно',
        startYear: '2021',
        endYear: '2026',
        bulletPoints: [
            'Провёл глубокий аудит Playwright и переработку её API для E2E-тестирования; помог 6 командам ускорить внедрение тестов в 2 раза, что заметно повысило скорость доставки и уверенность в качестве production.',
            'Выявил критические боли в API собственной библиотеки через догфудинг (внедрение в собственные продукты); провёл переработку, упростив интеграцию для 10+ команд и снизив когнитивную нагрузку на разработку.',
            'Спроектировал и задокументировал новую библиотеку управления состоянием с прозрачностью сценариев и side-effects; упростил отладку и ускорил онбординг продуктовых команд на 60%.',
            'Спроектировал и реализовал универсальный компонент ввода кода подтверждения, внедрённый 10+ продуктовыми командами; сократил time-to-market типовых фич на 3 дня.',
            'Разработал стандарты и рекомендации по реализации продуктовых сценариев, включая архитектурные паттерны; сократил время адаптации новых разработчиков в несколько раз и повысил консистентность кода во всех проектах.',
            'Проводил архитектурные ревью продуктовых команд, выявляя и помогая исправлять архитектурные антипаттерны; предотвратил потенциальные сложности в развитии и переделках в production.',
            'Провёл аудит мёртвого кода в библиотеке компонентов (TypeScript, CSS) и подготовил повторяемый процесс контроля; сократил размер финального бандла на 18%, улучшив Core Web Vitals и снизив нагрузку на сеть клиентов.',
            'Оптимизировал CI/CD pipeline сборки библиотек: ускорил доставку версий до продуктовых команд на 25%, внедрил canary-релизы для безопасного тестирования обновлений и снижения риска регрессий.',
            'Спроектировал и реализовал BFF, оптимизировав сборку Docker-контейнеров; снизил время загрузки страниц и размер бандла клиента, улучшив пользовательский опыт на 300мс.',
            'Выявил и устранил критические баги в сборке и отображении продуктовых метрик, предотвратив потерю важных аналитических сигналов и риск ошибочных бизнес-решений.',
        ],
    },
    {
        icon: '/images/companies/greendata.png',
        role: 'Фронтенд разработчик',
        location: 'Удаленно',
        startYear: '2020',
        endYear: '2021',
        bulletPoints: [
            'Улучшил документацию архитектуры проекта, что снизило время онбординга новых разработчиков и выявило критические пробелы в текущем подходе к модульности; инициировал рефакторинг легаси-кода на основе полученных insights.',
            'Разработал интерфейсы взаимодействия с БД ([добавьте: какие сценарии — работа с большими наборами данных, фильтрация, реал-тайм обновления]); внедрил ([добавьте: оптимизация — виртуализация, пагинация, индексация запросов]) для повышения отзывчивости UI при работе с [добавьте: объёмом данных].',
            'Отладил и стабилизировал сложные сценарии обработки данных ([добавьте: примеры — асинхронные операции, race conditions, обработка ошибок]), что снизило количество edge-case багов в production.',
            'Инициировал и провёл рефакторинг легаси-кода, заменив [добавьте: устаревший подход] на [добавьте: modern подход: FSD/hooks/TypeScript], улучшив читаемость и ускорив разработку новых фич.',
        ],
    },
    {
        icon: '/images/icon/asana-icon.svg',
        role: 'UI/UX Designer - Asana',
        location: 'New York, NY',
        startYear: '2019',
        endYear: '2022',
        bulletPoints: [
            'Created design systems for client projects across finance and healthcare',
            'Conducted user testing and research to validate designs',
            'Helped junior designers grow via mentorship',
        ],
    },
] as const satisfies readonly Experience[];

export const educationData = [
    {
        date: 'Sep 2015 - May 2019',
        title: 'B.F.A. in Graphic Design',
        subtitle: 'Pratt Institute — Brooklyn, NY',
    },
    {
        date: 'Mar 2021 - Aug 2021',
        title: 'UX Design Certificate',
        subtitle: 'Google UX Design - Coursera',
    },
    {
        date: 'Jan 2020 - Mar 2020',
        title: 'Front-End Web Development Bootcamp',
        subtitle: 'General Assembly — New York, NY',
    },
] as const satisfies readonly Education[];

export const featuredWork = [
    {
        title: 'Branding + Web Design for Cleaning Services',
        description:
            'Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.',
        roles: ['UX Designer', 'Framer Designer'],
        image: '/images/feature-work/feature-img-1.png',
    },
    {
        title: 'Brand Identity for a Health Care Company',
        description:
            'Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.',
        roles: ['UX Designer', 'Framer Designer'],
        image: '/images/feature-work/feature-img-2.png',
    },
] as const satisfies readonly FeaturedWork[];

export const projectOverview = {
    caseStudies: [
        { name: 'Wellnest', url: '#' },
        { name: 'ScoutHire', url: '#' },
    ],
    sideProjects: [
        { name: 'Formless', url: '#' },
        { name: 'Gridsnap', comingSoon: true },
        { name: 'OrbitPay Mobile App', comingSoon: true },
        { name: 'Siteflow Page Builder', comingSoon: true },
    ],
} as const satisfies ProjectOverview;
