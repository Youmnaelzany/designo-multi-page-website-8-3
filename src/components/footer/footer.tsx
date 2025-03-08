import Image from "next/image";
import Link from "next/link";

import { FaPinterest } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

import NavLinks from "../header/nav-links";
import { Separator } from "../ui/separator";
interface FooterProps {
  marginTop?: string;
}
export default function Footer({ marginTop }: FooterProps) {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-10 bg-[#1D1C1E] px-6  pb-16 text-white sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:px-[2.44rem] sm:pb-20 lg:pr-[10.25rem] lg:pl-[10.31rem] relative sm:pt-[10.38rem] pt-[18.81rem] ">
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo-light.png"
          alt="logo"
          width={180}
          height={18}
        />
      </Link>
      <Separator className="text-white opacity-[0.1] sm:hidden" />
      <NavLinks className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:justify-between sm:gap-x-[2.62rem] text-sm font-normal leading-[0.875rem] tracking-[0.125rem]" />
      <Separator className="hidden text-white opacity-[0.1] sm:block" />
      <div className="flex flex-col items-center justify-between gap-y-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="sm:w-[13.9375rem] text-base leading-[1.625rem] font-bold opacity-[0.5035] w-[20.4375rem] lg:w-[21.875rem]">
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="sm:w-[13.9375rem] text-base leading-[1.625rem] font-bold opacity-[0.5035] w-[20.4375rem] lg:w-[21.875rem]">
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 sm:self-end  justify-center sm:items-start">
        <Link href="/">
          <FaSquareFacebook className="text-[#E7816B] hover:text-[#FFAD9B] transition-all duration-300 ease-in size-5" />
        </Link>
        <Link href="/">
          <FaYoutube className="text-[#E7816B] hover:text-[#FFAD9B] transition-all duration-300 ease-in size-5" />
        </Link>
        <Link href="/">
          <FaXTwitter className="text-[#E7816B] hover:text-[#FFAD9B] transition-all duration-300 ease-in size-5" />
        </Link>
        <Link href="/">
          <FaPinterest className="text-[#E7816B] hover:text-[#FFAD9B] transition-all duration-300 ease-in size-5" />
        </Link>
        <Link href="/">
          <FaInstagram className="text-[#E7816B] hover:text-[#FFAD9B] transition-all duration-300 ease-in size-5" />
        </Link>
      </div>
    </footer>
  );
}
