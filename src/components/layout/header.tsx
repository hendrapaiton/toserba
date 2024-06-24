import { Nav } from "Product";
import Link from "next/link";
import { Logo } from "./logo";

type Props = {
  menu: Nav[];
};

export function Header({ menu }: Props) {
  return (
    <header className={"relative z-10 mx-auto lg:pt-12"}>
      <div className={"flex flex-col items-center justify-center"}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <ul className="flex mt-5 gap-x-8 rounded-full bg-main-red-barn bg-opacity-20 px-5 py-2.5 text-xl font-medium uppercase text-main-red-barn lg:flex">
          {menu.map((item: Nav) => (
            <li key={item.name} className="transition-opacity cursor-pointer">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
