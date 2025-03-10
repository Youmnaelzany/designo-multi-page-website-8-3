
interface HeroTitleProps {
    title: string;
    description: string;
}

export default function HeroTitle({ title, description }: HeroTitleProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#E7816B] sm:rounded-lg text-center h-[20rem] sm:h-[15.75rem] gap-y-6 mx-[-1.5rem] sm:px-0">
            <h1 className="text-[2rem] leading-9 font-medium text-white sm:text-[3rem] sm:leading-12 w-[20.4375rem] sm:w-[23.4375rem]">{title}</h1>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-normal text-white w-[20.4375rem] sm:w-[23.4375rem]">{description}</p>
        </div>
    )
}