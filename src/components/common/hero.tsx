import { Nav } from "Product";
import { Header } from "../layout/header";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="container relative z-10 mx-auto max-w-[1140px] pt-20">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        <Image
          src={"https://fakestoreapi.com/icons/intro.svg"}
          alt="hero"
          width={400}
          height={520}
          className="max-w-64 md:max-w-60 lg:max-w-80"
          priority
        />
        <div className="flex max-w-2xl flex-col items-center md:items-start">
          <h2 className="text-center text-3xl font-semibold leading-tight md:text-left lg:text-5xl">
            belanja kebutuhan apasaja<br /> 
            <span className="uppercase">Toserba</span>
          </h2>
          <div className="mt-8 flex flex-col gap-2.5 min-[380px]:flex-row">
            <Link href="/products">
              <Button className="rounded-full bg-main-red-barn px-[1.87rem] py-[0.63rem] leading-none text-white">
                Pantau produknya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const menu: Nav[] = [
    { name: "Beranda", link: "/" },
    { name: "Produk", link: "/product" },
    { name: "Kontak", link: "/contact" },
    { name: "Anggota", link: "/member" },
  ];

  return (
    <section className="relative mx-auto overflow-hidden bg-light-pink px-2.5 pb-10 lg:h-[100vh] lg:pb-0">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-4/6 w-1/4 rounded-full bg-white opacity-60 blur-xl"></div>
      <Header menu={menu} />
      <HeroContent />
    </section>
  );
}
