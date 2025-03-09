import Image from "next/image";
import Link from "next/link";


export default function WebDesign() {
    return (
        <div className="bg-[url('/assets/home/mobile/image-app-design.jpg')] sm:bg-[url('/assets/home/tablet/image-web-design.jpg')] xl:bg-[url('/assets/home/desktop/image-web-design-small.jpg')] bg-no-repeat bg-center bg-cover w-[20.4375rem] h-[15.625rem] sm:w-[43.0625rem] sm:h-[12.5rem] xl:w-[33.8125rem] xl:h-[19.25rem] rounded-[0.9375rem] flex flex-col items-center justify-center text-center gap-y-1 relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 rounded-[0.9375rem] hover:bg-[#E7816B]/70 transition-colors duration-200 ease-in-out"></div>
            <h3 className="text-[1.75rem] font-medium leading-9 tracking-[0.0875rem] uppercase text-white z-50">Web Design</h3>
            <Link href="/web-design" className="flex items-center gap-x-2 text-[0.9375rem] font-normal uppercase tracking-[0.3125rem] leading-normal text-white z-50">
                View Projects <Image src="/assets/shared/desktop/icon-right-arrow.svg" alt="arrow" width={7} height={10} />
            </Link>
        </div>
    );
}

