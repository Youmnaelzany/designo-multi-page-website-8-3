import Link from "next/link";
import { Button } from "../ui/button";

export default function MainHero() {
    return (
        <div className="bg-[#E7816B] h-[52.6875rem] sm:w-[43.0625rem] lg:h-[40rem] lg:w-[69.4375rem] -mx-6 sm:mx-0 flex flex-col lg:flex-row lg:justify-between pt-20 px-6 sm:pt-[3.75rem] sm:px-[3.62rem] lg:pt-[9.06rem] lg:px-[5.94rem] sm:rounded-lg overflow-hidden relative">
            {/* Text */}
            <div className="flex flex-col items-center gap-y-6 sm:gap-y-[1.19rem] lg:gap-y-10 lg:items-start lg:justify-start z-10">
                <div className="flex flex-col items-center text-center gap-y-[0.88rem] sm:gap-y-2 lg:gap-y-[0.69rem] lg:items-start lg:justify-start lg:text-left">
                    <h1 className="text-[2rem] font-medium leading-9 text-white w-[24.75rem] sm:w-[24.8125rem] lg:w-[24.75rem]">
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className="w-[20.4375rem] text-[0.9375rem] leading-[1.5625rem] font-medium text-white sm:w-[27.8125rem] lg:w-[27.8125rem]">
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>
                </div>
                <div className="">
                    <Button variant="destructive">
                        <Link href="/about">Learn More</Link>
                    </Button>
                </div>
            </div>

            {/* Image */}
            <img
                src="/assets/home/desktop/image-hero-phone.png"
                alt="Description"
                className=" "
            />
        </div>
    );
}