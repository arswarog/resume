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
                        src={assetUrl('/images/hero-sec/user-img.jpg')}
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
                            href="https://career.habr.com/arswarog"
                            icon="/images/habr-career.svg"
                            label="Хабр Карьера"
                        />
                    </div>
                    <Button
                        className="h-auto rounded-full px-3 py-2.5 gap-3 bg-[#F3CA4D] text-primary transition-colors duration-300 hover:bg-[#E5B93D]"
                        nativeButton={false}
                        render={<a href="https://t.me/arswarog" />}
                    >
                        <img
                            src={assetUrl('/images/telegram.svg')}
                            alt="Telegram"
                            width={24}
                            height={24}
                        />
                        <span className="text-sm sm:text-base font-semibold">Напишите мне</span>
                    </Button>
                </div>
            </div>
        </HeroSectionContainer>
    );
}
