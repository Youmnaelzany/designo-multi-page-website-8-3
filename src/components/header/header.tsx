import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 flex items-center justify-between bg-white px-6 pt-[2.19rem] pb-[2.13rem] sm:py-16 sm:pr-[2.62rem] sm:pl-[2.44rem] lg:pr-[10.37rem] lg:pb-[4.19rem] lg:pl-[10.31rem] z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          alt="logo"
          width={180}
          height={18}
        />
      </Link>
      {/* Tablet & Desktop Nav */}
      <nav className="hidden sm:block">
        <NavLinks className="flex items-center justify-between gap-x-[2.62rem] text-sm leading-3.5 text-[#333136] uppercase" />
      </nav>
      {/* Mobile Nav */}
      <MobileMenu />
    </header>
  );
}
