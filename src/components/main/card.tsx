import Image from "next/image";

interface CardProps {
    cardImg: string;
    title: string;
    description: string;
}

export default function Card({ cardImg, title, description }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row xl:flex-col ">
            <div className="">
                <Image src={cardImg} alt={title} className="sm:w-[339px] sm:h-[310px] xl:w-[350px] xl:h-[320px] xl:rounded-t-lg sm:rounded-l-lg xl:rounded-bl-none rounded-t-lg sm:rounded-tr-none" width={327} height={320} />
            </div>
            <div className="group flex flex-col items-center justify-center text-center gap-y-4 px-[1.87rem] py-8 sm:gap-y-[0.92rem] sm:pb-[6.77rem] sm:pt-[6.81rem] sm:pl-8 sm:pr-[2.56rem] xl:gap-y-4 xl:py-8 hover:bg-[#E7816B] transition-colors duration-300 ease-in-out bg-[#FDF3F0] xl:rounded-b-lg sm:rounded-r-lg xl:rounded-tr-none rounded-b-lg sm:rounded-bl-none">
                <h3 className="text-xl font-medium leading-[1.625rem] tracking-[0.3125rem] text-[#E7816B] uppercase w-[16.70038rem] sm:w-[17.3125rem]  group-hover:text-white xl:w-[17.40rem]">{title}</h3>
                <p className="text-base font-normal leading-[1.625rem] text-[#333136] w-[16.70038rem] sm:w-[17.3125rem] xl:w-[16.875rem] group-hover:text-white">{description}</p>
            </div>
        </div>
    );
}