import { Experience } from './experience';
import { ExperienceContainer } from './experience-container';
import { ExperienceItem } from './experience-item';

export function ExperienceBlock() {
    return (
        <ExperienceContainer>
            <Experience
                icon="/images/companies/tbank.png"
                role="Старший coretech разработчик"
                location="Удаленно"
                time="2021 – 2026"
            >
                <ExperienceItem>
                    Провёл глубокий аудит Playwright и переработку её API для E2E-тестирования;
                    помог 6 командам ускорить внедрение тестов в 2 раза, что заметно повысило
                    скорость доставки и уверенность в качестве production.
                </ExperienceItem>
                <ExperienceItem>
                    Выявил критические боли в API собственной библиотеки через догфудинг (внедрение
                    в собственные продукты); провёл переработку, упростив интеграцию для 10+ команд
                    и снизив когнитивную нагрузку на разработку.
                </ExperienceItem>
                <ExperienceItem>
                    Спроектировал и задокументировал новую библиотеку управления состоянием с
                    прозрачностью сценариев и side-effects; упростил отладку и ускорил онбординг
                    продуктовых команд на 60%.
                </ExperienceItem>
                <ExperienceItem>
                    Спроектировал и реализовал универсальный компонент ввода кода подтверждения,
                    внедрённый 10+ продуктовыми командами; сократил time-to-market типовых фич на 3
                    дня.
                </ExperienceItem>
                <ExperienceItem>
                    Разработал стандарты и рекомендации по реализации продуктовых сценариев, включая
                    архитектурные паттерны; сократил время адаптации новых разработчиков в несколько
                    раз и повысил консистентность кода во всех проектах.
                </ExperienceItem>
                <ExperienceItem>
                    Проводил архитектурные ревью продуктовых команд, выявляя и помогая исправлять
                    архитектурные антипаттерны; предотвратил потенциальные сложности в развитии и
                    переделках в production.
                </ExperienceItem>
                <ExperienceItem>
                    Провёл аудит мёртвого кода в библиотеке компонентов (TypeScript, CSS) и
                    подготовил повторяемый процесс контроля; сократил размер финального бандла на
                    18%, улучшив Core Web Vitals и снизив нагрузку на сеть клиентов.
                </ExperienceItem>
                <ExperienceItem>
                    Оптимизировал CI/CD pipeline сборки библиотек: ускорил доставку версий до
                    продуктовых команд на 25%, внедрил canary-релизы для безопасного тестирования
                    обновлений и снижения риска регрессий.
                </ExperienceItem>
                <ExperienceItem>
                    Спроектировал и реализовал BFF, оптимизировав сборку Docker-контейнеров; снизил
                    время загрузки страниц и размер бандла клиента, улучшив пользовательский опыт на
                    300мс.
                </ExperienceItem>
                <ExperienceItem>
                    Выявил и устранил критические баги в сборке и отображении продуктовых метрик,
                    предотвратив потерю важных аналитических сигналов и риск ошибочных
                    бизнес-решений.
                </ExperienceItem>
            </Experience>
            <Experience
                icon="/images/companies/greendata.png"
                role="Фронтенд разработчик"
                location="Удаленно"
                time="2020 – 2021"
            >
                <ExperienceItem>
                    Улучшил документацию архитектуры проекта, что снизило время онбординга новых
                    разработчиков и выявило критические пробелы в текущем подходе к модульности;
                    инициировал рефакторинг легаси-кода на основе полученных insights.
                </ExperienceItem>
                <ExperienceItem>
                    Разработал интерфейсы взаимодействия с БД ([добавьте: какие сценарии — работа с
                    большими наборами данных, фильтрация, реал-тайм обновления]); внедрил
                    ([добавьте: оптимизация — виртуализация, пагинация, индексация запросов]) для
                    повышения отзывчивости UI при работе с [добавьте: объёмом данных].
                </ExperienceItem>
                <ExperienceItem>
                    Отладил и стабилизировал сложные сценарии обработки данных ([добавьте: примеры —
                    асинхронные операции, race conditions, обработка ошибок]), что снизило
                    количество edge-case багов в production.
                </ExperienceItem>
                <ExperienceItem>
                    Инициировал и провёл рефакторинг легаси-кода, заменив [добавьте: устаревший
                    подход] на [добавьте: modern подход: FSD/hooks/TypeScript], улучшив читаемость и
                    ускорив разработку новых фич.
                </ExperienceItem>
            </Experience>
            <Experience
                icon="/images/icon/asana-icon.svg"
                role="UI/UX Designer - Asana"
                location="New York, NY"
                time="2019 – 2022"
            >
                <ExperienceItem>
                    Created design systems for client projects across finance and healthcare
                </ExperienceItem>
                <ExperienceItem>
                    Conducted user testing and research to validate designs
                </ExperienceItem>
                <ExperienceItem>Helped junior designers grow via mentorship</ExperienceItem>
            </Experience>
        </ExperienceContainer>
    );
}
