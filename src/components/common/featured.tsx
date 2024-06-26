"use client";

import { useEffect, useState } from "react";
import Carousel from "../layout/carousel";
import { Item } from "Product";
import { Card } from "../layout/card";

export function Featured() {
  const [products, setProducts] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/featured")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="container mx-auto my-[70px] max-w-[1140px]">
        <div className="px-2.5">
          <h2 className="mb-2.5 text-center text-header-2 font-semibold leading-none">
            Produk Unggulan
          </h2>
          <h3 className="mx-auto max-w-3xl text-center text-header-4 leading-none">
            anda dapat melihat produk unggulan kami pada daftar di bawah ini
            <br />
            produk selengkapnya dapat diakses pada menu produk yang tersedia
          </h3>
        </div>
        <Carousel className="mt-12 pl-2.5">
          {products?.map((product: Item) => (
            <Card key={product.id} product={product} />
          ))}
        </Carousel>
      </section>
    </>
  );
}
