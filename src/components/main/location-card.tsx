
interface AboutCardProps {
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
    title: string;
    officeAddress: string;
    addressOne: string;
    addressTwo: string;
    contactInfo: string;
    phoneNumber: string;
    emailAddress: string;
    specialStyle?: boolean
}

export default function LocationCard({ desktopImg, tabletImg, mobileImg, title, officeAddress, addressOne, addressTwo, contactInfo, phoneNumber, emailAddress, specialStyle }: AboutCardProps) {
    return (
        <div className={`flex flex-col  mx-[-1.5rem] sm:mx-0 gap-y-6 sm:gap-x-6 ${specialStyle ? "lg:flex-row-reverse" : "lg:flex-row"} `}>
            {/* Image Container */}
            <picture className="w-full lg:w-1/3">
                <source media="(min-width: 1024px)" srcSet={desktopImg} />
                <source media="(min-width: 768px)" srcSet={tabletImg} />
                <img
                    src={mobileImg}
                    alt="about-card"
                    className="w-full h-full object-cover rounded-lg"
                />
            </picture>

            {/* Text Container */}
            <div className="w-full lg:w-2/3 bg-[#FDF3F0] flex flex-col items-center justify-center sm:justify-start text-center  py-20 sm:py-20.sm:rounded-lg gap-y-6 sm:pl-[4.69rem] lg:pl-[5.94rem] sm:items-start sm:text-left">
                <div className="sm:w-[15.9375rem] w-[20.4375rem]">
                    <h2 className="text-[#E7816B] text-[2rem] font-medium leading-9 sm:text-[2.5rem] sm:leading-12">
                        {title}
                    </h2>
                </div>
                <div className="space-y-6 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-start">
                    {/* Address */}
                    <div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start sm:justify-start sm:w-[15.9375rem] w-[20.4375rem]">
                        <h4 className="text-[0.9375rem] font-bold leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {officeAddress}
                        </h4>
                        <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {addressOne}
                        </p>
                        <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {addressTwo}
                        </p>
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start sm:justify-start sm:w-[15.9375rem] w-[20.4375rem]">
                        <h4 className="text-[0.9375rem] font-bold leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {contactInfo}
                        </h4>
                        <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {phoneNumber}
                        </p>
                        <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-[#33313] sm:leading-[1.625rem] sm:text-base">
                            {emailAddress}
                        </p>
                    </div>
                </div>
            </div>
        </div >);
}