import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Gochi_Hand, Jost } from 'next/font/google';
import { Cart } from "@/components/layout/cart";
import { Footer } from "@/components/layout/footer";
import { Menu } from "@/components/layout/menu";
import { Logo } from "@/components/layout/logo";
import "./globals.css";

const jost = Jost({ subsets: ['latin'], variable: '--main-font' });
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gochi-hand'
});

export const metadata: Metadata = {
  title: "Toserba",
  description: "Toko Serba Ada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${gochiHand.variable}`}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
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
