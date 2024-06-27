"use client";

import { useEffect } from "react";
import { Featured } from "@/components/common/featured";
import { Hero } from "@/components/common/hero";
import { Promo } from "@/components/common/promo";
import { useTheme } from "next-themes";

export default function Index() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <>
      <Hero />
      <Featured />
      <Promo />
    </>
  );
}
