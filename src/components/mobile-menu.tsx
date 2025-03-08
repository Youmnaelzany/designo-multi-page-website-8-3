import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./nav-links";

export default function MobileMenu() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent side="top" className="w-full bg-[#1D1C1E] px-6 py-12">
          <SheetHeader>
            <NavLinks className="flex flex-col gap-y-8 text-2xl leading-6 text-[#FFFFFF]" />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
