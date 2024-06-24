import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Cart } from "@/components/layout/cart";
import { Footer } from "@/components/layout/footer";
import { Menu } from "@/components/layout/menu";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Nav } from "Product";
import { Logo } from "@/components/layout/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toserba",
  description: "Toko Serba Ada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu: Nav[] = [
    { name: "Beranda", link: "/" },
    { name: "Produk", link: "/product" },
    { name: "Kontak", link: "/contact" },
    { name: "Anggota", link: "/member" },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header menu={menu} />
            <main className="pt-20 lg:pt-0">
              <div className="fixed right-0 top-0 z-50 flex w-full justify-end lg:w-auto">
                <div className="hidden pr-16 pt-16 lg:inline-block">
                  <Cart />
                </div>
                <div className="flex w-full items-center justify-between bg-light-pink p-2.5 lg:hidden">
                  <Logo />
                  <Menu />
                </div>
              </div>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
