import { Button } from "@nextui-org/react";
import { Logo } from "./logo";
import { LuNewspaper, LuSend } from "react-icons/lu";

export function Footer() {
  const CompanyAddress = () => (
    <div className="pt-[1.87rem] text-center sm:pt-0 sm:text-left">
      <Logo />
      <div className="mt-2.5 leading-tight">
        <p>Antah Berantah</p>
        <p>IKN (62) 345-7890</p>
        <p>menteri@konoha.go.id</p>
      </div>
    </div>
  );

  const Newsletter = () => (
    <div className="flex max-w-96 flex-col items-center sm:items-end sm:pt-[2rem]">
      <h3 className="pr-3 text-center text-header-4 font-semibold sm:text-right">
        Dapatkan kabar terbaru
      </h3>
      <form className="relative flex w-full max-w-72 items-center ">
        <input
          type="email"
          placeholder="Surel anda"
          className="w-full rounded-full bg-[#ffefef] py-2.5 pl-5 outline-none"
        />
        <Button className="absolute right-1 bg-white" isIconOnly radius="full">
          <LuSend className="h-5 w-5" />
        </Button>
      </form>
      <p className="pt-2.5 text-center leading-tight sm:text-right">
        Dapatkan promo produk terbaru dari kami melalui surel yang anda
        daftarkan pada kolom di atas
      </p>
    </div>
  );

  return (
    <footer className="mt-[70px] bg-light-pink pb-10 pt-12">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full flex-col-reverse items-center justify-center sm:flex-row sm:items-start sm:justify-between">
          <CompanyAddress />
          <Newsletter />
        </div>
      </div>
    </footer>
  );
}
