interface AboutCardProps {
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
    title: string;
    description: string;
    specialStyle?: boolean
}

export default function AboutCard({ desktopImg, tabletImg, mobileImg, title, description }: AboutCardProps) {
    return (
        <div className="flex flex-col lg:flex-row mx-[-1.5rem] sm:mx-0">
            {/* Image Container */}
            <picture className="w-full lg:w-1/2">
                <source media="(min-width: 1024px)" srcSet={desktopImg} />
                <source media="(min-width: 768px)" srcSet={tabletImg} />
                <img
                    src={mobileImg}
                    alt="about-card"
                    className="w-full h-full object-cover"
                />
            </picture>

            {/* Text Container */}
            <div className="w-full lg:w-1/2 bg-[#E7816B] flex items-center justify-center py-20 lg:py-0">
                <div className="w-full max-w-[20.4375rem] sm:max-w-[35.75rem] lg:max-w-[27.8125rem] flex flex-col gap-y-8 items-center justify-center text-center lg:text-left lg:items-start">
                    <h2 className="text-white text-[2rem] font-medium leading-9 sm:text-[2.5rem] sm:leading-12">
                        {title}
                    </h2>
                    <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-white sm:leading-[1.625rem] sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>);
}