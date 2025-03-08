import Link from "next/link";

interface NavLinksProps {
  className?: string;
}
export default function NavLinks({ className }: NavLinksProps) {
  const navlink = [
    {
      name: "Our Company",
      link: "/about",
    },
    {
      name: "Locations",
      link: "/locations",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <ul className={className}>
      {navlink.map((item) => (
        <li key={item.name}>
          <Link
            href={item.link}
            className="font-normal tracking-[0.125rem] uppercase transition-all duration-300 ease-in-out hover:underline"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
