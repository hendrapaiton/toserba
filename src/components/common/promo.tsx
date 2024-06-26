"use client";

import {
  LuAward,
  LuPercent,
  LuSparkles,
  LuTimer,
} from "react-icons/lu";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Grid from "../layout/grid";

export function Promo() {
  type Bitmap = {
    image: string;
  };
  const [product, setProduct] = useState<Bitmap>();

  useEffect(() => {
    fetch("/api/promo")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section className="container mx-auto my-[70px] flex max-w-[1140px] items-center justify-between px-2.5">
      <div>
        <h2 className="mb-8 text-header-2 font-semibold leading-none">
          Barang yang terjamin
        </h2>
        <Grid className="flex flex-col">
          <Grid.Item className="mb-5 flex items-center">
            <LuAward className="mr-5 h-10 w-10 text-main-red-barn" />
            Brand Kualitas Terbaik
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <LuSparkles className="mr-5 h-10 w-10 text-main-red-barn" />
            Desain & Model Terbaru
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <LuPercent className=" mr-5 h-10 w-10 text-main-red-barn" />
            Selalu Ada Diskon
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <LuTimer className="mr-5 h-10 w-10 text-main-red-barn" />
            Pengiriman Tepat Waktu
          </Grid.Item>
        </Grid>
        <Button className="mt-7 bg-main-red-barn text-white">
          Selengkapnya
        </Button>
      </div>
      <div className="hidden md:block">
        <Image
          src={product?.image || ""}
          width="346"
          height="345"
          alt="Random Images"
        />
      </div>
    </section>
  );
}
