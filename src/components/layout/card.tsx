"use client";

import { Button } from "@nextui-org/react";
import { Item } from "Product";
import { useRouter } from "next/navigation";

export function Card({ product }: { product: Item }) {
  const router = useRouter();
  const temp = product.title;
  const maxLength = 35;
  let title = temp.substring(0, maxLength);
  title = title.substring(0, Math.min(title.length, title.lastIndexOf(" ")));

  return (
    <div className="w-3/5 shrink-0 cursor-grab overflow-hidden rounded-xl bg-secondary-light-blue bg-opacity-50 pb-2.5 shadow-md last:mr-0 sm:w-2/5 lg:w-[28%]">
      <div
        className="no-repat h-52 w-full items-center justify-center bg-cover bg-top"
        style={{
          backgroundImage: `url('${product.image}')`,
        }}
      ></div>
      <div className="p-4">
        <h2 className="font-gochi-hand text-2xl font-semibold text-main-red-barn">
          {title}
        </h2>
        <p className="text-base leading-none text-white">
          {product.description.substring(0, 90)}...
        </p>
        <Button
          onClick={() => router.push(`/product/${product.id}`)}
          className="mt-5 rounded-full bg-main-red-barn px-[1.87rem] py-[0.63rem] leading-none text-white"
        >
          View Product
        </Button>
      </div>
    </div>
  );
}
