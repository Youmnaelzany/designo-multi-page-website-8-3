interface AboutCardProps {
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
    title: string;
    description: string;
    descriptionTwo: string;
    specialStyle?: boolean
}

export default function AboutCard({ desktopImg, tabletImg, mobileImg, title, description, descriptionTwo, specialStyle }: AboutCardProps) {
    return (
        <div className="flex flex-col items-center justify-center lg:flex-row mx-[-1.5rem] sm:mx-0" style={specialStyle ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
            <picture>
                <source media="(min-width: 1024px)" srcSet={desktopImg} />
                <source media="(min-width: 768px)" srcSet={tabletImg} />
                <img src={mobileImg} alt="about-card lg:rounded-t-lg sm:rounded-l-lg lg:rounded-bl-none rounded-t-lg sm:rounded-tr-none" />
            </picture>
            <div className="flex flex-col gap-6 items-center justify-center text-center lg:text-left lg:justify-start bg-[#FDF3F0] py-20 px-6 sm:pl-[3.69rem] sm:pr-[3.62rem] lg:py-[6.85em] lg:pr-24 lg:pl-[5.87rem] lg:items-start lg:rounded-b-lg sm:rounded-r-lg lg:rounded-tr-none rounded-b-lg sm:rounded-bl-none">
                <div className="w-[20.4375rem] sm:w-[35.75rem] lg:w-[27.8125rem]">
                    <h2 className="text-[#E7816B] text-[2rem] font-medium leading-9 sm:py-[4.25rem] sm:text-[2.5rem] sm:leading-12">{title}</h2>
                    <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#333136] sm:leading-[1.625rem] sm:text-base">{description}</p>
                    <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#333136] sm:leading-[1.625rem] sm:text-base">{descriptionTwo}</p>
                </div>
            </div>
        </div>);
}