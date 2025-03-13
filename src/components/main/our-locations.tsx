import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export default function OurLocations() {
    const locations = [
        {
            image: "/assets/shared/desktop/illustration-canada.svg",
            country: "Canada",
        },
        {
            image: "/assets/shared/desktop/illustration-australia.svg",
            country: "Australia",
        },
        {
            image: "/assets/shared/desktop/illustration-united-kingdom.svg",
            country: "United Kingdom",
        },
    ];
    return (
        <section className="flex flex-col items-center justify-center gap-y-12 sm:gap-y-20 lg:flex-row lg:justify-between lg:px-16">
            {locations.map((location) => (
                <div className="flex flex-col items-center justify-center gap-y-8 " key={location.country}>
                    <div className="flex flex-col items-center justify-center gap-y-12 relative">
                        <Image src={location.image} alt={location.country} width={202} height={202} className="z-50" />
                        <Image
                            src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                            alt="Circle Pattern"
                            width={202}
                            height={202}
                            className="absolute top-0 left-0 mx-auto right-0"
                        />
                        <h3 className="text-xl leading-[1.625rem] font-medium tracking-[0.3125rem] text-[#333136]">
                            {location.country}
                        </h3>
                    </div>
                    <Button variant="outline">
                        <Link href="/locations">See location</Link>
                    </Button>
                </div>
            ))}
        </section>
    );
}
