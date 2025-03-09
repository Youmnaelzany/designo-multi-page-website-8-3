import { Button } from "../ui/button";

export default function LetsTalk() {
    return (
        <div className="bg-[#E7816B] h-auto rounded-[0.9375rem] flex flex-col items-center justify-center xl:items-center xl:justify-between xl:flex-row mx-6 sm:mx-[2.44rem] xl:ml-[10.31rem] xl:mr-[10.25rem] relative left-0 right-0 z-30 xl:px-24 py-16 gap-y-8 px-6 -bottom-46 sm:-bottom-20 xl:-bottom-20">
            <div className="flex items-center justify-center text-center flex-col xl:items-start xl:justify-center xl:text-left gap-y-4">
                <h2 className="text-[2rem] font-medium leading-9 text-white w-[17.4375rem] sm:text-[2.5rem] sm:leading-10 sm:w-[20.9375rem] xl:w-[16.75rem]">Let&apos;s talk about your project</h2>
                <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-white w-[18.4375rem] sm:w-[28.8125rem] xl:w-[28.6875rem] sm:text-base sm:leading-[1.625rem]">
                    Ready to take it to the next level? Contact us today and find out how our expertise can
                    help your business grow.
                </p>
            </div>
            <Button variant="destructive">Get in touch</Button>
        </div>
    );
}