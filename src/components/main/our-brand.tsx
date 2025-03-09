import Image from "next/image";


export default function OurBrands() {
    const brands = [
        {
            image: "/assets/home/desktop/illustration-passionate.svg",
            title: "Passionate",
            description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
        },
        {
            image: "/assets/home/desktop/illustration-resourceful.svg",
            title: "Resourceful",
            description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",

        },
        {
            image: "/assets/home/desktop/illustration-friendly.svg",
            title: "Friendly",
            description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",

        },
    ];
    return (
        <section className="flex flex-col items-center justify-center gap-y-20 sm:gap-y-8 xl:flex-row xl:justify-between xl:gap-x-[1.88rem] text-center">
            {brands.map((brand) => (
                <div className="flex flex-col items-center justify-center gap-y-12 sm:flex-row sm:justify-between sm:gap-x-12 xl:flex-col xl:items-center xl:justify-center text-canter sm:text-left xl:text-center " key={brand.title}>
                    <div className="relative">
                        <Image src={brand.image} alt={brand.title} width={202} height={202} className="z-50" />
                        <Image
                            src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                            alt="Circle Pattern"
                            width={202}
                            height={202}
                            className="absolute top-0 left-0 mx-auto right-0"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-8 sm:items-start sm:justify-start sm:gap-y-4 xl:gap-y-8 text-center sm:text-left xl:text-center w-[20.4375rem] sm:w-[27.4375rem] xl:w-[21.875rem]">
                        <h3 className="text-xl leading-[1.625rem] font-medium tracking-[0.3125rem] text-[#333136] text-center xl:self-center">
                            {brand.title}
                        </h3>
                        <p className="text-base text-[#333136] leading-[1.625rem] font-normal">{brand.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
