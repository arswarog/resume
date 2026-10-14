import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/urls';

import { HeroSectionContainer } from './hero-section-container';
import { SocialLink } from './social-link';

export function HeroSectionBlock() {
    return (
        <HeroSectionContainer>
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                <div className="absolute top-0 transform -translate-y-1/2">
                    <img
                        src={assetUrl('/images/hero-sec/user-img.png')}
                        alt="user-img"
                        width={145}
                        height={145}
                        className="border-4 border-white rounded-full"
                    />
                    <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                    <h1>Евгений Лубяной</h1>
                    <p className="text-violet-700 font-normal">Senior Web Developer</p>
                    <div className="flex items-center gap-2">
                        <img
                            src={assetUrl('/images/icon/map-icon.svg')}
                            alt="map-icon"
                            width={20}
                            height={20}
                        />
                        <p className="text-primary">Краснодар</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                        <SocialLink
                            href="https://github.com/arswarog"
                            icon="/images/github.svg"
                            label="Github"
                        />
                        <SocialLink
                            href="https://t.me/arswarog"
                            icon="/images/telegram.svg"
                            label="Telegram"
                        />
                        <SocialLink
                            href="https://career.habr.com/arswarog"
                            icon="/images/habr-career.svg"
                            label="Хабр Карьера"
                        />
                    </div>
                    <Button
                        className="h-auto rounded-full p-0"
                        nativeButton={false}
                        render={
                            <a
                                href="#"
                                className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                            />
                        }
                    >
                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                            <img
                                src={assetUrl('/images/icon/spark-icon.svg')}
                                alt="spark-icon"
                                width={14}
                                height={14}
                            />
                            <span className="text-sm sm:text-base font-semibold text-white">
                                Get in touch
                            </span>
                        </span>
                    </Button>
                </div>
            </div>
        </HeroSectionContainer>
    );
}
